/*
 * LightningChartJS example that showcases a simple XY line series in Blazor.
 */

export function createXYChart(pointsCollection) {

    // Import LightningChartJS
    const lcjs = require('@arction/lcjs')

    // Extract required parts from LightningChartJS.
    const {
        lightningChart,
        SolidLine,
        SolidFill,
        ColorHEX,
        AxisTickStrategies,
        UIOrigins,
        DataPatterns
    } = lcjs

    // Decide on an origin for DateTime axis.
    const dateOrigin = new Date(2020, 6, 1)

    // Create a XY Chart.
    const chart = lightningChart().ChartXY({container: 'chart-element'})

    // Modify the default X Axis to use DateTime TickStrategy, and set the origin for the DateTime Axis.
    chart.getDefaultAxisX().setTickStrategy(AxisTickStrategies.DateTime, (tickStrategy) => tickStrategy.setDateOrigin(dateOrigin))

    chart.setPadding({
        right: 50
    })
        .setTitle('LCJS Blazor Test')

    // Set the correct value to use for the data frequency.
    // 1000ms * 60s * 60min * 24h
    const dataFrequency = 1000 * 60 * 60 * 24

    // Create a line series for each set of points received from Blazor Server.
    pointsCollection.forEach((element, index) => {
        chart.addLineSeries({ dataPattern: DataPatterns.horizontalProgressive})
        .setName('Line ' + index)
        .setStrokeStyle(new SolidLine({ fillStyle: new SolidFill({ color: ColorHEX(getRandomColor()), thickness: 2 })}))
        .add(element.map((point) => ({ x: point.x * dataFrequency, y: point.y })))
    });

    // Setup view nicely.
    chart.getDefaultAxisY()
        .setTitle('Y-axis values')

    // Enable AutoCursor auto-fill.
    chart.setAutoCursor(cursor => cursor
        .setResultTableAutoTextStyle(true)
        .disposeTickMarkerX()
        .setTickMarkerYAutoTextStyle(true)
    )
    const legend = chart.addLegendBox()
        .setOrigin(UIOrigins.RightTop)
        .setPosition({ x: 90, y: 90 })
        .setMargin({ left: 10, right: 10, top: 10, bottom: 10 })

    // Add Chart to LegendBox.
    legend.add(chart)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
