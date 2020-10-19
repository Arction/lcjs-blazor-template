export function create3dChart(pointsCollection) {
    
    // Import LightningChartJS
    const lcjs = require('@arction/lcjs')

    // Extract required parts from LightningChartJS.
    const {
        lightningChart,
        SolidFill,
        ColorHEX,
        UIElementBuilders,
        UILayoutBuilders,        
    } = lcjs

    // Initiate chart
    const chart3D = lightningChart().Chart3D({        
        container: 'chart-element'
    })
        .setTitle('3D Scatter Chart')

    // Set Axis titles
    chart3D.getDefaultAxisX().setTitle('Axis X')
    chart3D.getDefaultAxisY().setTitle('Axis Y')
    chart3D.getDefaultAxisZ().setTitle('Axis Z')

    // Create a point series for each set of points received from Blazor Server.
    pointsCollection.forEach((element) => {
        chart3D.addPointSeries({ pointShape: 'sphere' })
        .setPointStyle((pointStyle) => pointStyle
            // Change the point fillStyle.
            .setFillStyle(new SolidFill({ color: ColorHEX(getRandomColor())}))
            // Change point size.
            .setSize(30))
        .add(element)
    });

    // Add layout UI Element for checkboxes.
    const layout = chart3D.addUIElement(UILayoutBuilders.Column)
        .setPosition({ x: 90, y: 90 })
        .setOrigin({ x: 1, y: 1 })

    // Flag for camera rotation
    let rotateCamera = false
    // Add button for toggling camera rotation into the layout UI Element
    const rotateCameraButton = layout.addElement(UIElementBuilders.CheckBox)
        .setText('Rotate camera')
    rotateCameraButton.onSwitch((_, state) => {
        rotateCamera = state
    })
    rotateCameraButton.setOn(rotateCamera)

    // Method to handle animating camera rotation.
    let cameraAngle = 0
    const dist = 1
    const animateCameraRotation = () => {
        if (rotateCamera) {
            chart3D.setCameraLocation(
                {
                    x: Math.cos(cameraAngle) * dist,
                    y: 0.50,
                    z: Math.sin(cameraAngle) * dist
                }
            )
            cameraAngle += 0.005
        }
        requestAnimationFrame(animateCameraRotation)
    }
    animateCameraRotation()
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }