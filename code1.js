gdjs.GameCode = {};
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDObjectivePrompt_95TextObjects1= [];
gdjs.GameCode.GDObjectivePrompt_95TextObjects2= [];
gdjs.GameCode.GDObjectivePrompt_95TextObjects3= [];
gdjs.GameCode.GDObjectiveTitle_95TextObjects1= [];
gdjs.GameCode.GDObjectiveTitle_95TextObjects2= [];
gdjs.GameCode.GDObjectiveTitle_95TextObjects3= [];
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDPlayerShipObjects1= [];
gdjs.GameCode.GDPlayerShipObjects2= [];
gdjs.GameCode.GDPlayerShipObjects3= [];
gdjs.GameCode.GDEngineObjects1= [];
gdjs.GameCode.GDEngineObjects2= [];
gdjs.GameCode.GDEngineObjects3= [];
gdjs.GameCode.GDAsteroidObjects1= [];
gdjs.GameCode.GDAsteroidObjects2= [];
gdjs.GameCode.GDAsteroidObjects3= [];
gdjs.GameCode.GDPickupObjects1= [];
gdjs.GameCode.GDPickupObjects2= [];
gdjs.GameCode.GDPickupObjects3= [];
gdjs.GameCode.GDRefineryObjects1= [];
gdjs.GameCode.GDRefineryObjects2= [];
gdjs.GameCode.GDRefineryObjects3= [];
gdjs.GameCode.GDRefineryDropoffObjects1= [];
gdjs.GameCode.GDRefineryDropoffObjects2= [];
gdjs.GameCode.GDRefineryDropoffObjects3= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDRefineryHealthTextObjects1= [];
gdjs.GameCode.GDRefineryHealthTextObjects2= [];
gdjs.GameCode.GDRefineryHealthTextObjects3= [];
gdjs.GameCode.GDUpgrade1TextObjects1= [];
gdjs.GameCode.GDUpgrade1TextObjects2= [];
gdjs.GameCode.GDUpgrade1TextObjects3= [];
gdjs.GameCode.GDShopTextObjects1= [];
gdjs.GameCode.GDShopTextObjects2= [];
gdjs.GameCode.GDShopTextObjects3= [];
gdjs.GameCode.GDUpgrade2TextObjects1= [];
gdjs.GameCode.GDUpgrade2TextObjects2= [];
gdjs.GameCode.GDUpgrade2TextObjects3= [];
gdjs.GameCode.GDNewObjectObjects1= [];
gdjs.GameCode.GDNewObjectObjects2= [];
gdjs.GameCode.GDNewObjectObjects3= [];

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


gdjs.GameCode.eventsList0 = function(runtimeScene) {

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
}{runtimeScene.getVariables().get("Refinery_HP").setNumber(100);
}{runtimeScene.getVariables().get("HasHaltUpgrade").setNumber(0);
}{runtimeScene.getVariables().get("HasSpeed1Upgrade").setNumber(0);
}{runtimeScene.getVariables().get("SpeedIncrease").setNumber(0);
}{runtimeScene.getVariables().get("MaxSpeed").setNumber(200);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDRefineryHealthTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRefineryHealthTextObjects1[i].setString("Refinery Integrity: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Refinery_HP")) + "%");
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Light-Years_V001_Looping.mp3", 1, true, 12, 1);
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects2);
gdjs.copyArray(runtimeScene.getObjects("RefineryDropoff"), gdjs.GameCode.GDRefineryDropoffObjects2);
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects2[i].rotate(25, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDRefineryDropoffObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRefineryDropoffObjects2[i].rotate(20, runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPickupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects1[i].putAroundObject((gdjs.GameCode.GDPlayerShipObjects1.length !== 0 ? gdjs.GameCode.GDPlayerShipObjects1[0] : null), 70, (( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDEngineObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects1[i].putAroundObject((gdjs.GameCode.GDPlayerShipObjects1.length !== 0 ? gdjs.GameCode.GDPlayerShipObjects1[0] : null), -(15), (( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()));
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 4000;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win Screen", false);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Refinery_HP")) <= 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("GlobalPlayerMoney").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Failed Screen", true);
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 180, runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 180, runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 180, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDEngineObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects2[i].setAngle((( gdjs.GameCode.GDPlayerShipObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects2[0].getAngle()) - 180);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerShipObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerShipObjects2[i].getAverageForce().getLength() >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("MaxSpeed")) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerShipObjects2[k] = gdjs.GameCode.GDPlayerShipObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerShipObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDEngineObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEngineObjects2[i].getAverageForce().getLength() >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("MaxSpeed")) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDEngineObjects2[k] = gdjs.GameCode.GDEngineObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEngineObjects2.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDPickupObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPickupObjects2[i].getAverageForce().getLength() >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("MaxSpeed")) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPickupObjects2[k] = gdjs.GameCode.GDPickupObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPickupObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEngineObjects2 */
/* Reuse gdjs.GameCode.GDPickupObjects2 */
/* Reuse gdjs.GameCode.GDPlayerShipObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects2[i].addPolarForce((gdjs.GameCode.GDPlayerShipObjects2[i].getAverageForce().getAngle()), -(20), 1);
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects2[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects2[0].getAverageForce().getAngle()), -(20), 1);
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects2[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects2[0].getAverageForce().getAngle()), -(20), 1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects2[i].addPolarForce((gdjs.GameCode.GDPlayerShipObjects2[i].getAngle()) - 90, 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects2[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects2[0].getAngle()) - 90, 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects2[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects2[0].getAngle()) - 90, 10, 1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects2[i].addPolarForce((gdjs.GameCode.GDPlayerShipObjects2[i].getAngle()) + 180, 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects2[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects2[0].getAngle()) + 180, 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects2[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects2[0].getAngle()) + 180, 10, 1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects2[i].addPolarForce((gdjs.GameCode.GDPlayerShipObjects2[i].getAngle()) + 90, 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects2[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects2[0].getAngle()) + 90, 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects2[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects2[0].getAngle()) + 90, 10, 1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects2);
{for(var i = 0, len = gdjs.GameCode.GDEngineObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects2[i].setFlow(100);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerShipObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerShipObjects2[i].addPolarForce((gdjs.GameCode.GDPlayerShipObjects2[i].getAngle()), 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDEngineObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects2[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects2[0].getAngle()), 10, 1);
}
for(var i = 0, len = gdjs.GameCode.GDPickupObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects2[i].addPolarForce((( gdjs.GameCode.GDPlayerShipObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects2[0].getAngle()), 10, 1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects2);
{for(var i = 0, len = gdjs.GameCode.GDEngineObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEngineObjects2[i].setFlow(1);
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


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects2Objects = Hashtable.newFrom({"Pickup": gdjs.GameCode.GDPickupObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects2Objects = Hashtable.newFrom({"Pickup": gdjs.GameCode.GDPickupObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects2Objects = Hashtable.newFrom({"Pickup": gdjs.GameCode.GDPickupObjects2});gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects2);
/* Reuse gdjs.GameCode.GDPickupObjects2 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects2Objects, 60, false);
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects2Objects, 10, true);
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects2 */
/* Reuse gdjs.GameCode.GDPickupObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects2[i].addForceTowardObject((gdjs.GameCode.GDPickupObjects2.length !== 0 ? gdjs.GameCode.GDPickupObjects2[0] : null), 10, 1);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects1Objects = Hashtable.newFrom({"Pickup": gdjs.GameCode.GDPickupObjects1});gdjs.GameCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects2Objects, 10, true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPickupObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects2[i].setAnimationFrame(1);
}
}
{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

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
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Engine"), gdjs.GameCode.GDEngineObjects1);
/* Reuse gdjs.GameCode.GDPickupObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.GameCode.GDPlayerShipObjects1);
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].putAroundObject((gdjs.GameCode.GDPickupObjects1.length !== 0 ? gdjs.GameCode.GDPickupObjects1[0] : null), 0, (( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAngle()));
}
}{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].addPolarForce((( gdjs.GameCode.GDPickupObjects1.length === 0 ) ? (( gdjs.GameCode.GDEngineObjects1.length === 0 ) ? (( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAverageForce().getAngle()) :gdjs.GameCode.GDEngineObjects1[0].getAverageForce().getAngle()) :gdjs.GameCode.GDPickupObjects1[0].getAverageForce().getAngle()), (( gdjs.GameCode.GDPickupObjects1.length === 0 ) ? (( gdjs.GameCode.GDEngineObjects1.length === 0 ) ? (( gdjs.GameCode.GDPlayerShipObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerShipObjects1[0].getAverageForce().getLength()) :gdjs.GameCode.GDEngineObjects1[0].getAverageForce().getLength()) :gdjs.GameCode.GDPickupObjects1[0].getAverageForce().getLength()), 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPickupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPickupObjects1[i].setAnimationFrame(0);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects2Objects = Hashtable.newFrom({"Pickup": gdjs.GameCode.GDPickupObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects2});gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8464324);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects2[i].addForceTowardPosition(gdjs.randomInRange(400, 800), gdjs.randomInRange(200, 520), gdjs.randomInRange(30, 150) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SpeedIncrease")), 1);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects2});gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8466828);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects2[i].addForceTowardPosition(gdjs.randomInRange(400, 800), gdjs.randomInRange(200, 520), gdjs.randomInRange(30, 150) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SpeedIncrease")), 1);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBackgroundObjects2Objects = Hashtable.newFrom({"Background": gdjs.GameCode.GDBackgroundObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects1});gdjs.GameCode.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pickup"), gdjs.GameCode.GDPickupObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPickupObjects2Objects, 100, true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects2[i].addPolarForce((gdjs.GameCode.GDAsteroidObjects2[i].getAverageForce().getAngle()) - 180, 0.05, 1);
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "GameSpeed");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("SpeedIncrease").add(4);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameSpeed");
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(2, 10), "Timer");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDAsteroidObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects, gdjs.randomInRange(-(100), 1380), gdjs.randomInRange(-(20), -(50)), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}
{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(2, 10), "Timer");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDAsteroidObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects, gdjs.randomInRange(1300, 1330), gdjs.randomInRange(-(50), 780), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects2);
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.GameCode.GDBackgroundObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBackgroundObjects2Objects, true, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "514133__juverisetila__medium-explosion.mp3", false, 20, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRefineryObjects2Objects = Hashtable.newFrom({"Refinery": gdjs.GameCode.GDRefineryObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects1Objects = Hashtable.newFrom({"Asteroid": gdjs.GameCode.GDAsteroidObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRefineryDropoffObjects1Objects = Hashtable.newFrom({"RefineryDropoff": gdjs.GameCode.GDRefineryDropoffObjects1});gdjs.GameCode.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Asteroid"), gdjs.GameCode.GDAsteroidObjects2);
gdjs.copyArray(runtimeScene.getObjects("Refinery"), gdjs.GameCode.GDRefineryObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAsteroidObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRefineryObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAsteroidObjects2 */
gdjs.copyArray(runtimeScene.getObjects("RefineryHealthText"), gdjs.GameCode.GDRefineryHealthTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDAsteroidObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAsteroidObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Refinery_HP").sub(gdjs.randomInRange(10, 30));
}{for(var i = 0, len = gdjs.GameCode.GDRefineryHealthTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRefineryHealthTextObjects2[i].setString("Refinery Integrity: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Refinery_HP")) + "%");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "156031__iwiploppenisse__explosion.mp3", false, 25, 1);
}}

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
    gdjs.GameCode.GDScoreTextObjects1[i].setString("$" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + " / $4000");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "135936__bradwesson__collectcoin.wav", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
gdjs.GameCode.condition2IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HasHaltUpgrade")) == 1);
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 1000;
}if ( gdjs.GameCode.condition1IsTrue_1.val ) {
{
gdjs.GameCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}}
}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val && gdjs.GameCode.condition2IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Upgrade1Text"), gdjs.GameCode.GDUpgrade1TextObjects2);
{runtimeScene.getVariables().get("HasHaltUpgrade").setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).sub(1000);
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString("$" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + " / $4000");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PowerUp25.mp3", false, 20, 1);
}{for(var i = 0, len = gdjs.GameCode.GDUpgrade1TextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDUpgrade1TextObjects2[i].setColor("0;243;48");
}
}{for(var i = 0, len = gdjs.GameCode.GDUpgrade1TextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDUpgrade1TextObjects2[i].setString("Inertial Dampeners");
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
gdjs.GameCode.condition2IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HasSpeed1Upgrade")) == 1);
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 1500;
}if ( gdjs.GameCode.condition1IsTrue_1.val ) {
{
gdjs.GameCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}}
}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val && gdjs.GameCode.condition2IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Upgrade2Text"), gdjs.GameCode.GDUpgrade2TextObjects2);
{runtimeScene.getVariables().get("HasSpeed1Upgrade").setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).sub(1500);
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString("$" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + " / $4000");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PowerUp25.mp3", false, 20, 1);
}{for(var i = 0, len = gdjs.GameCode.GDUpgrade2TextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDUpgrade2TextObjects2[i].setString("Max Speed Up");
}
}{for(var i = 0, len = gdjs.GameCode.GDUpgrade2TextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDUpgrade2TextObjects2[i].setColor("0;243;48");
}
}{runtimeScene.getVariables().get("MaxSpeed").setNumber(300);
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
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 1500;
}if ( gdjs.GameCode.condition1IsTrue_1.val ) {
{
gdjs.GameCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("HasSpeed1Upgrade")) == 0;
}}
}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val && gdjs.GameCode.condition2IsTrue_1.val;
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8232252);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "521973__kastenfrosch__error.ogg", false, 20, 100);
}}

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
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8233020);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "521973__kastenfrosch__error.ogg", false, 20, 100);
}}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "PowerUp25.mp3", false, 20, 1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_1.val ) {
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}}
gdjs.GameCode.conditionTrue_1.val = true && gdjs.GameCode.condition0IsTrue_1.val && gdjs.GameCode.condition1IsTrue_1.val;
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "521973__kastenfrosch__error.ogg", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "o");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7846396);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{runtimeScene.getVariables().getFromIndex(0).add(500);
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString("$" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) + " / $4000");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "135936__bradwesson__collectcoin2.wav", false, 20, 1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7836684);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}
{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList9(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDObjectivePrompt_95TextObjects1.length = 0;
gdjs.GameCode.GDObjectivePrompt_95TextObjects2.length = 0;
gdjs.GameCode.GDObjectivePrompt_95TextObjects3.length = 0;
gdjs.GameCode.GDObjectiveTitle_95TextObjects1.length = 0;
gdjs.GameCode.GDObjectiveTitle_95TextObjects2.length = 0;
gdjs.GameCode.GDObjectiveTitle_95TextObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDPlayerShipObjects1.length = 0;
gdjs.GameCode.GDPlayerShipObjects2.length = 0;
gdjs.GameCode.GDPlayerShipObjects3.length = 0;
gdjs.GameCode.GDEngineObjects1.length = 0;
gdjs.GameCode.GDEngineObjects2.length = 0;
gdjs.GameCode.GDEngineObjects3.length = 0;
gdjs.GameCode.GDAsteroidObjects1.length = 0;
gdjs.GameCode.GDAsteroidObjects2.length = 0;
gdjs.GameCode.GDAsteroidObjects3.length = 0;
gdjs.GameCode.GDPickupObjects1.length = 0;
gdjs.GameCode.GDPickupObjects2.length = 0;
gdjs.GameCode.GDPickupObjects3.length = 0;
gdjs.GameCode.GDRefineryObjects1.length = 0;
gdjs.GameCode.GDRefineryObjects2.length = 0;
gdjs.GameCode.GDRefineryObjects3.length = 0;
gdjs.GameCode.GDRefineryDropoffObjects1.length = 0;
gdjs.GameCode.GDRefineryDropoffObjects2.length = 0;
gdjs.GameCode.GDRefineryDropoffObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDRefineryHealthTextObjects1.length = 0;
gdjs.GameCode.GDRefineryHealthTextObjects2.length = 0;
gdjs.GameCode.GDRefineryHealthTextObjects3.length = 0;
gdjs.GameCode.GDUpgrade1TextObjects1.length = 0;
gdjs.GameCode.GDUpgrade1TextObjects2.length = 0;
gdjs.GameCode.GDUpgrade1TextObjects3.length = 0;
gdjs.GameCode.GDShopTextObjects1.length = 0;
gdjs.GameCode.GDShopTextObjects2.length = 0;
gdjs.GameCode.GDShopTextObjects3.length = 0;
gdjs.GameCode.GDUpgrade2TextObjects1.length = 0;
gdjs.GameCode.GDUpgrade2TextObjects2.length = 0;
gdjs.GameCode.GDUpgrade2TextObjects3.length = 0;
gdjs.GameCode.GDNewObjectObjects1.length = 0;
gdjs.GameCode.GDNewObjectObjects2.length = 0;
gdjs.GameCode.GDNewObjectObjects3.length = 0;

gdjs.GameCode.eventsList13(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
