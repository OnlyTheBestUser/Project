gdjs.GameCode = {};
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDPlayerShipObjects1= [];
gdjs.GameCode.GDPlayerShipObjects2= [];
gdjs.GameCode.GDEngineObjects1= [];
gdjs.GameCode.GDEngineObjects2= [];
gdjs.GameCode.GDAsteroidObjects1= [];
gdjs.GameCode.GDAsteroidObjects2= [];
gdjs.GameCode.GDPickupObjects1= [];
gdjs.GameCode.GDPickupObjects2= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects1Objects = Hashtable.newFrom({"Pickup": gdjs.GameCode.GDPickupObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects1});gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


{
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 180, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDEngineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects1[i].setAngle((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()) - 180);
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerShipObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerShipObjects1[i].getAverageForce().getLength() >= 200 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerShipObjects1[k] = gdjs.GameCode.GDPlayerShipObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerShipObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDEngineObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDEngineObjects1[i].getAverageForce().getLength() >= 200 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEngineObjects1[k] = gdjs.GameCode.GDEngineObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDEngineObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDPickupObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPickupObjects1[i].getAverageForce().getLength() >= 200 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPickupObjects1[k] = gdjs.GameCode.GDPickupObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPickupObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEngineObjects1 */
/* Reuse gdjs.GameCode.GDPickupObjects1 */
/* Reuse gdjs.GameCode.GDPlayerShipObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects1[i].addPolarForce((gdjs.GameCode.GDPlayerShipObjects1[i].getAverageForce().getAngle()), -(20), 1);
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects1[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAverageForce().getAngle()), -(20), 1);
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects1[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAverageForce().getAngle()), -(20), 1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects1[i].addPolarForce((gdjs.GameCode.GDPlayerShipObjects1[i].getAngle()) - 90, 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects1[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()) - 90, 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects1[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()) - 90, 10, 1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects1[i].addPolarForce((gdjs.GameCode.GDPlayerShipObjects1[i].getAngle()) + 180, 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects1[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()) + 180, 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects1[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()) + 180, 10, 1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects1[i].addPolarForce((gdjs.GameCode.GDPlayerShipObjects1[i].getAngle()) + 90, 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects1[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()) + 90, 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects1[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()) + 90, 10, 1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects1[i].addPolarForce((gdjs.GameCode.GDPlayerShipObjects1[i].getAngle()), 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects1[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()), 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects1[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()), 10, 1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects1);
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDPlayerShipObjects1.length !== 0 ? gdjs.GameCode.GDPlayerShipObjects1[0] : null), (gdjs.GameCode.GDPickupObjects1.length !== 0 ? gdjs.GameCode.GDPickupObjects1[0] : null));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "r"));
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects1 */
/* Reuse gdjs.GameCode.GDPickupObjects1 */
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDPickupObjects1.length !== 0 ? gdjs.GameCode.GDPickupObjects1[0] : null), (gdjs.GameCode.GDAsteroidObjects1.length !== 0 ? gdjs.GameCode.GDAsteroidObjects1[0] : null));
}{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].addForceTowardObject((gdjs.GameCode.GDPickupObjects1.length !== 0 ? gdjs.GameCode.GDPickupObjects1[0] : null), 100, 0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects1);
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].rotate(15, runtimeScene);
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDPlayerShipObjects1.length = 0;
gdjs.GameCode.GDPlayerShipObjects2.length = 0;
gdjs.GameCode.GDEngineObjects1.length = 0;
gdjs.GameCode.GDEngineObjects2.length = 0;
gdjs.GameCode.GDAsteroidObjects1.length = 0;
gdjs.GameCode.GDAsteroidObjects2.length = 0;
gdjs.GameCode.GDPickupObjects1.length = 0;
gdjs.GameCode.GDPickupObjects2.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
