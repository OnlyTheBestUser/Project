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
gdjs.GameCode.GDRefineryObjects1= [];
gdjs.GameCode.GDRefineryObjects2= [];
gdjs.GameCode.GDRefineryDropoffObjects1= [];
gdjs.GameCode.GDRefineryDropoffObjects2= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDRefineryHealthTextObjects1= [];
gdjs.GameCode.GDRefineryHealthTextObjects2= [];
gdjs.GameCode.GDUpgrade1TextObjects1= [];
gdjs.GameCode.GDUpgrade1TextObjects2= [];
gdjs.GameCode.GDShopTextObjects1= [];
gdjs.GameCode.GDShopTextObjects2= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects1Objects = Hashtable.newFrom({"Pickup": gdjs.GameCode.GDPickupObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects1Objects = Hashtable.newFrom({"Pickup": gdjs.GameCode.GDPickupObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects1Objects = Hashtable.newFrom({"Pickup": gdjs.GameCode.GDPickupObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects1Objects = Hashtable.newFrom({"Pickup": gdjs.GameCode.GDPickupObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRefineryDropoffObjects1Objects = Hashtable.newFrom({"RefineryDropoff": gdjs.GameCode.GDRefineryDropoffObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRefineryObjects1Objects = Hashtable.newFrom({"Refinery": gdjs.GameCode.GDRefineryObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects1});gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7764300);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].addForceTowardPosition(gdjs.randomInRange(400, 800), gdjs.randomInRange(200, 520), gdjs.randomInRange(30, 150) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SpeedIncrease")), 1);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects1});gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7766244);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].addForceTowardPosition(gdjs.randomInRange(400, 800), gdjs.randomInRange(200, 520), gdjs.randomInRange(30, 150) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SpeedIncrease")), 1);
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Upgrade1Text"), gdjs.GameCode.GDUpgrade1TextObjects1);
{runtimeScene.getVariables().get("HasHaltUpgrade").setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).sub(1000);
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].setString("$" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PowerUp25.mp3", false, 20, 1);
}{for(var i = 0, len = gdjs.GameCode.GDUpgrade1TextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDUpgrade1TextObjects1[i].setColor("0;243;48");
}
}{for(var i = 0, len = gdjs.GameCode.GDUpgrade1TextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDUpgrade1TextObjects1[i].setString("X = Inertial Dampeners");
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("RefineryHealthText"), gdjs.GameCode.GDRefineryHealthTextObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameSpeed");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(100);
}{runtimeScene.getVariables().get("HasHaltUpgrade").setNumber(0);
}{runtimeScene.getVariables().get("SpeedIncrease").setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDRefineryHealthTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRefineryHealthTextObjects1[i].setString("Refinery Integrity: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) + "%");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects1);
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDPlayerShipObjects1.length !== 0 ? gdjs.GameCode.GDPlayerShipObjects1[0] : null), (gdjs.GameCode.GDPickupObjects1.length !== 0 ? gdjs.GameCode.GDPickupObjects1[0] : null));
}{for(var i = 0, len = gdjs.GameCode.GDPickupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects1[i].putAroundObject((gdjs.GameCode.GDPlayerShipObjects1.length !== 0 ? gdjs.GameCode.GDPlayerShipObjects1[0] : null), 70, (( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDEngineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects1[i].putAroundObject((gdjs.GameCode.GDPlayerShipObjects1.length !== 0 ? gdjs.GameCode.GDPlayerShipObjects1[0] : null), -(15), (( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("RefineryDropoff"), gdjs.GameCode.GDRefineryDropoffObjects1);
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].rotate(25, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDRefineryDropoffObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRefineryDropoffObjects1[i].rotate(20, runtimeScene);
}
}}

}


{



}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 180, runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 180, runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 180, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDEngineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects1[i].setAngle((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()) - 180);
}
}}

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


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HasHaltUpgrade")) == 1;
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects1[i].addPolarForce((gdjs.GameCode.GDPlayerShipObjects1[i].getAverageForce().getAngle()), -((gdjs.GameCode.GDPlayerShipObjects1[i].getAverageForce().getLength())), 0);
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects1[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAverageForce().getAngle()), -((gdjs.GameCode.GDEngineObjects1[i].getAverageForce().getLength())), 0);
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects1[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAverageForce().getAngle()), -((gdjs.GameCode.GDPickupObjects1[i].getAverageForce().getLength())), 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects1[i].clearForces();
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects1[i].clearForces();
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects1[i].clearForces();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects1Objects, 10, false);
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects1 */
/* Reuse gdjs.GameCode.GDPickupObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects1);
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].putAroundObject((gdjs.GameCode.GDPickupObjects1.length !== 0 ? gdjs.GameCode.GDPickupObjects1[0] : null), 0, (( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameCode.GDPickupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects1[i].setAnimationFrame(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
gdjs.GameCode.condition2IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects1Objects, 60, false);
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.GameCode.condition1IsTrue_1.val ) {
{
gdjs.GameCode.condition2IsTrue_1.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects1Objects, 10, true);
}}
}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val && gdjs.GameCode.condition2IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects1 */
/* Reuse gdjs.GameCode.GDPickupObjects1 */
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].addForceTowardObject((gdjs.GameCode.GDPickupObjects1.length !== 0 ? gdjs.GameCode.GDPickupObjects1[0] : null), 10, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPickupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects1[i].setAnimationFrame(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects1Objects, 100, true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].addPolarForce((gdjs.GameCode.GDAsteroidObjects1[i].getAverageForce().getAngle()) - 180, 0.01, 1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("RefineryDropoff"), gdjs.GameCode.GDRefineryDropoffObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRefineryDropoffObjects1Objects, false, runtimeScene, true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects1);
{runtimeScene.getVariables().getFromIndex(0).add(100);
}{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].setString("$" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Refinery"), gdjs.GameCode.GDRefineryObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRefineryObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RefineryHealthText"), gdjs.GameCode.GDRefineryHealthTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(2).sub(20);
}{for(var i = 0, len = gdjs.GameCode.GDRefineryHealthTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRefineryHealthTextObjects1[i].setString("Refinery Integrity: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)) + "%");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "", false, 100, 1);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "GameSpeed");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("SpeedIncrease").add(5);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameSpeed");
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(5, 15), "Timer");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDAsteroidObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects, gdjs.randomInRange(-(100), 1380), gdjs.randomInRange(-(50), -(100)), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(5, 12), "Timer");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDAsteroidObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects, gdjs.randomInRange(1380, 1480), gdjs.randomInRange(-(50), 780), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}
{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDAsteroidObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDAsteroidObjects1[i].getY() > 720 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDAsteroidObjects1[k] = gdjs.GameCode.GDAsteroidObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDAsteroidObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
gdjs.GameCode.condition2IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 1000;
}if ( gdjs.GameCode.condition1IsTrue_1.val ) {
{
gdjs.GameCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HasHaltUpgrade")) == 0;
}}
}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val && gdjs.GameCode.condition2IsTrue_1.val;
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7668828);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "521973__kastenfrosch__error.ogg", false, 20, 100);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 1000;
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

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
gdjs.GameCode.GDRefineryObjects1.length = 0;
gdjs.GameCode.GDRefineryObjects2.length = 0;
gdjs.GameCode.GDRefineryDropoffObjects1.length = 0;
gdjs.GameCode.GDRefineryDropoffObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDRefineryHealthTextObjects1.length = 0;
gdjs.GameCode.GDRefineryHealthTextObjects2.length = 0;
gdjs.GameCode.GDUpgrade1TextObjects1.length = 0;
gdjs.GameCode.GDUpgrade1TextObjects2.length = 0;
gdjs.GameCode.GDShopTextObjects1.length = 0;
gdjs.GameCode.GDShopTextObjects2.length = 0;

gdjs.GameCode.eventsList3(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
