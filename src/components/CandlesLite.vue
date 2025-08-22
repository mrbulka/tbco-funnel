<script setup lang="ts">
import { createChart, ColorType, CandlestickSeries, type CandlestickData, type UTCTimestamp } from 'lightweight-charts';
import { onMounted, onBeforeUnmount, ref } from 'vue';

const props = withDefaults(defineProps<{
  height?: number;
}>(), {
  height: 200,
});

const container = ref<HTMLDivElement | null>(null);
let chart: any;
let series: any;
let ro: ResizeObserver | null = null;

function generateData(points = 60): CandlestickData[] {
  const data: CandlestickData[] = [];
  const nowSec = Math.floor(Date.now() / 1000);
  const day = 24 * 60 * 60;
  let price = 100;

  // generate ascending time series
  for (let i = points - 1; i >= 0; i--) {
    const t = (nowSec - i * day) as UTCTimestamp;
    const vol = Math.random() * 2 + 1;
    const open = price + (Math.random() - 0.5) * vol;
    const close = open + (Math.random() - 0.5) * vol;
    const high = Math.max(open, close) + Math.random() * vol;
    const low = Math.min(open, close) - Math.random() * vol;
    data.push({ time: t, open, high, low, close });
    price = close;
  }
  return data;
}

onMounted(() => {
  if (!container.value) return;

  chart = createChart(container.value, {
    width: container.value.clientWidth,
    height: props.height,
    layout: {
      background: { type: ColorType.Solid, color: 'transparent' },
      textColor: 'rgba(255,255,255,0.6)',
    },
    grid: {
      vertLines: { color: 'rgba(255,255,255,0.06)' },
      horzLines: { color: 'rgba(255,255,255,0.06)' },
    },
    rightPriceScale: {
      borderVisible: false,
      scaleMargins: { top: 0.2, bottom: 0.2 },
    },
    timeScale: {
      borderVisible: false,
      fixLeftEdge: true,
      fixRightEdge: true,
    },
    crosshair: {
      horzLine: { visible: false },
      vertLine: { visible: false },
      mode: 0,
    },
    localization: { priceFormatter: (p: number) => p.toFixed(2) },
  });

  series = chart.addSeries(CandlestickSeries, {
    upColor: '#10b981',
    wickUpColor: '#86efac',
    downColor: '#ef4444',
    wickDownColor: '#fca5a5',
  });

  series.setData(generateData(60));
  chart.timeScale().fitContent();

  ro = new ResizeObserver((entries) => {
    const entry = entries[0];
    if (!chart || !entry) return;
    const width = Math.floor(entry.contentRect.width);
    chart.applyOptions({ width });
  });
  ro.observe(container.value);
});

onBeforeUnmount(() => {
  ro?.disconnect();
  if (chart) {
    chart.remove();
    chart = null;
  }
});
</script>

<template>
  <div ref="container" class="lite-wrap"></div>
</template>

<style scoped>
.lite-wrap {
  width: 100%;
  /* Height is controlled via chart options using the height prop */
}
</style>
