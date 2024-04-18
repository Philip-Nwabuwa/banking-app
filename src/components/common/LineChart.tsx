'use client'

import React, { useEffect, useRef } from 'react'

interface SeriesData {
  name: string
  data: number[]
}

interface ChartProps {
  series: SeriesData[]
  categories: string[]
  height: number
  baseColor: string
  lightColor: string
  labelColor: string
  borderColor: string
}

const LineChart: React.FC<ChartProps> = ({
  series,
  categories,
  height,
  baseColor,
  lightColor,
  labelColor,
  borderColor,
}) => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = chartRef.current
    if (!element) return

    import('apexcharts').then((module) => {
      const ApexCharts = module.default

      const options = {
        series: series,
        chart: {
          fontFamily: 'inherit',
          type: 'area',
          height: height,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {},
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'solid',
          opacity: 1,
        },
        stroke: {
          curve: 'smooth',
          show: true,
          width: 3,
          colors: [baseColor],
        },
        xaxis: {
          categories: categories,
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            style: {
              colors: labelColor,
              fontSize: '12px',
            },
          },
          crosshairs: {
            position: 'front',
            stroke: {
              color: baseColor,
              width: 1,
              dashArray: 3,
            },
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: '12px',
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: labelColor,
              fontSize: '12px',
            },
          },
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0,
            },
          },
          hover: {
            filter: {
              type: 'none',
              value: 0,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0,
            },
          },
        },
        tooltip: {
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: function (val: number) {
              return '₦' + val
            },
          },
        },
        colors: [lightColor],
        grid: {
          borderColor: borderColor,
          strokeDashArray: 4,
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        markers: {
          strokeColor: baseColor,
          strokeWidth: 3,
        },
      }

      const chart = new ApexCharts(element, options)
      chart.render()

      return () => {
        chart.destroy()
      }
    })
  }, [
    series,
    categories,
    height,
    baseColor,
    lightColor,
    labelColor,
    borderColor,
  ])

  return (
    <div className="card card-bordered">
      <div className="card-body">
        <div
          id="kt_apexcharts_3"
          style={{ height: `${height}px` }}
          ref={chartRef}
        ></div>
      </div>
    </div>
  )
}

export default LineChart
