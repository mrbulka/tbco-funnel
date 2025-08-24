import { ref, onMounted, onBeforeUnmount } from 'vue';

export interface DiscordWidgetData {
  id: string;
  name: string;
  instant_invite?: string | null;
  presence_count?: number; // online count
  members?: Array<{
    id: string;
    username: string;
    status: string;
    avatar_url: string | null;
  }>;
  channels?: Array<{
    id: string;
    name: string;
    position: number;
  }>;
}

export interface UseDiscordWidgetResult {
  loading: Readonly<{ value: boolean }>;
  error: Readonly<{ value: string | null }>;
  presenceCount: Readonly<{ value: number | null }>;
  approxMemberCount: Readonly<{ value: number | null }>;
  data: Readonly<{ value: DiscordWidgetData | null }>;
  refresh: () => Promise<void>;
}

/**
 * Fetches Discord server widget public data for social proof.
 * Requires the Discord "Server Widget" to be enabled in the server settings.
 * If VITE_DISCORD_GUILD_ID is not provided or fetch fails, values will remain null.
 *
 * How to enable the widget:
 * - Discord Server Settings → Widget → Enable Server Widget
 * - Copy the Server ID (GUILD_ID), then set VITE_DISCORD_GUILD_ID in your .env
 */
export function useDiscordWidget(guildId?: string): UseDiscordWidgetResult {
  const envGuildId = import.meta.env.VITE_DISCORD_GUILD_ID as string | undefined;
  const gid = guildId || envGuildId;

  const loading = ref(false);
  const error = ref<string | null>(null);
  const data = ref<DiscordWidgetData | null>(null);
  const presenceCount = ref<number | null>(null);
  const approxMemberCount = ref<number | null>(null);

  let timer: number | null = null;

  async function refresh() {
    if (!gid) {
      // No guild configured; remain null but not an error
      return;
    }
    loading.value = true;
    error.value = null;
    try {
      const res = await fetch(`https://discord.com/api/guilds/${gid}/widget.json`, {
        headers: { Accept: 'application/json' },
        cache: 'no-store',
      });
      if (!res.ok) {
        throw new Error(`Widget fetch failed: ${res.status} ${res.statusText}`);
      }
      const json = (await res.json()) as DiscordWidgetData;
      data.value = json;
      presenceCount.value = typeof json.presence_count === 'number' ? json.presence_count : null;

      // The widget does not always include total member count, so keep this as null.
      // If you want to approximate from members array length when present:
      approxMemberCount.value = Array.isArray(json.members) ? json.members.length : null;
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      error.value = msg;
      // Keep previous data on failure; do not throw
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => {
    // Initial fetch; then refresh periodically for a live-ish count
    refresh();
    timer = window.setInterval(refresh, 60_000);
  });

  onBeforeUnmount(() => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  });

  return {
    loading,
    error,
    presenceCount,
    approxMemberCount,
    data,
    refresh,
  };
}
