# Using LightningChart<sup>&#174; </sup> JS with Blazor
This repository showcases the usage of LightningChart<sup>&#174;</sup> JS charting tools within a [Blazor][0] web application.

More information about LightningChart<sup>&#174;</sup> JS can be found from our website, https://www.arction.com/lightningchart-js/

## Getting Started
This project can be opened with any code editor like [Visual Studio Code][1] or also traditionally through [Visual Studio][2] using the supplied solution file. Additionally, in order to properly build this solution, you will require the latest version of the .NET Core SDK. For further details and download links, please refer to the *Get Started* guide for Blazor [here][3]!

## LightningChart JS and C#
Due to the unique way in which a Blazor application uses C# code on  WebAssembly to program the UI, using LightningChart<sup>&#174; </sup> JS here is slightly different than a traditional web application that is scripted on JavaScript. Here, we make use of the [JS Interop][5] features baked into Blazor to issue calls to the LightningChart<sup>&#174; </sup> JS plugin. It is, then, much more feasible to write a custom "wrapper" that can act as an interface between LightningChart<sup>&#174; </sup> JS and your C# code.

Such a wrapper is already written and configured in this project in the `Plugins/LCJS/src` folder, so feel free to through and tinker with the respective files. However, if you desire to create one from scratch, please refer to this excellent guide by [Kedren Villena](https://medium.com/@kedren.villena?source=post_page-----2b0310279320--------------------------------) on [Using npm packages with Blazor][4].

## Sending Data from your C# Code to LightningChart<sup>&#174; </sup> JS
In order to send data to LightningChart<sup>&#174; </sup> JS plugin, we use the [JS Interop][5] functions to call our wrapper, and pass on the *Line Series* (2D charts) or *Point Series* (3D charts) data. The wrapper is then responsible for setting up the required charts and assigning data to the same. 

It can be convenient to use existing .NET classes to represent this data coming in from the C# part of your code. [Lists][6] or Arrays of [Points][7] can be used to represent two-dimensional data. However, in case of three-dimensional data, a custom type which has x, y and z axis properties might be required. (A [Point3D][8] type *does* exist, however, it is not part of .NET Core, and hence, cannot be used.)

Examples of all these cases are provided in this template.

## Handling Pre-Rendering in Blazor Pages
By default, pages in Blazor are pre-rendered (i.e, rendered before connection is established to the browser). Hence, any JavaScript script that has a dependency on the DOM might not work as intended. Hence, it is important that care is taken to properly call LightningChart<sup>&#174; </sup> JS functions at the appropriate time. Please refer to [this][9] section for more information.

## Support
If you notice an error in the example code, please open an issue on [GitHub][10].
Official [API documentation][11] can be found on [Arction][12] website.
If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][13] (tagged lightningchart).
If you think you found a bug in the LightningChart JavaScript library, please contact support@arction.com.
Direct developer email support can be purchased through a [Support Plan][14] or by contacting sales@arction.com.

© Arction Ltd 2009-2020. All rights reserved.

[0]: https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor
[1]: https://code.visualstudio.com/
[2]: https://visualstudio.microsoft.com/
[3]: https://dotnet.microsoft.com/learn/aspnet/blazor-tutorial/install
[4]: https://medium.com/swlh/using-npm-packages-with-blazor-2b0310279320
[5]: https://docs.microsoft.com/en-us/aspnet/core/blazor/call-javascript-from-dotnet?view=aspnetcore-3.1
[6]: https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=netcore-3.1
[7]: https://docs.microsoft.com/en-us/dotnet/api/system.drawing.point?view=netcore-3.1
[8]: https://docs.microsoft.com/en-us/dotnet/api/system.windows.media.media3d.point3d?view=netcore-3.1
[9]: https://docs.microsoft.com/en-us/aspnet/core/blazor/call-javascript-from-dotnet?view=aspnetcore-3.1#detect-when-a-blazor-server-app-is-prerendering
[10]: https://github.com/Arction/lcjs-html-example/issues
[11]: https://www.arction.com/lightningchart-js-api-documentation
[12]: https://www.arction.com
[13]: https://stackoverflow.com/questions/tagged/lightningchart
[14]: https://www.arction.com/support-services/
