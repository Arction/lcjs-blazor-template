/*
 * Wrapper for LightningChart JS to allow for JS interop calls from Blazor.
 * This wrapper performs initialization of underlying LCJS objects and provides a call point for JS interop compatibility.
 */

 import {createXYChart} from './lcjs_xy'
 import {create3dChart} from './lcjs_3d'

 export function CreateXYChart(pointsCollection){
     return createXYChart(pointsCollection)
 }

 export function Create3DChart(pointsCollection){
     return create3dChart(pointsCollection)
 }