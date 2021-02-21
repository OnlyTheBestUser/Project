gdjs.Start_32ScreenCode = {};
gdjs.Start_32ScreenCode.GDBackgroundObjects1= [];
gdjs.Start_32ScreenCode.GDBackgroundObjects2= [];
gdjs.Start_32ScreenCode.GDObjectivePrompt_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDObjectivePrompt_95TextObjects2= [];
gdjs.Start_32ScreenCode.GDObjectiveTitle_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDObjectiveTitle_95TextObjects2= [];
gdjs.Start_32ScreenCode.GDStartTextObjects1= [];
gdjs.Start_32ScreenCode.GDStartTextObjects2= [];
gdjs.Start_32ScreenCode.GDControlsTextObjects1= [];
gdjs.Start_32ScreenCode.GDControlsTextObjects2= [];
gdjs.Start_32ScreenCode.GDBlankButtonObjects1= [];
gdjs.Start_32ScreenCode.GDBlankButtonObjects2= [];
gdjs.Start_32ScreenCode.GDW_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDW_95TextObjects2= [];
gdjs.Start_32ScreenCode.GDA_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDA_95TextObjects2= [];
gdjs.Start_32ScreenCode.GDS_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDS_95TextObjects2= [];
gdjs.Start_32ScreenCode.GDD_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDD_95TextObjects2= [];
gdjs.Start_32ScreenCode.GDControls_95Stop_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDControls_95Stop_95TextObjects2= [];
gdjs.Start_32ScreenCode.GDX_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDX_95TextObjects2= [];
gdjs.Start_32ScreenCode.GDMouseButton1Objects1= [];
gdjs.Start_32ScreenCode.GDMouseButton1Objects2= [];
gdjs.Start_32ScreenCode.GDControls_95Grabber_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDControls_95Grabber_95TextObjects2= [];
gdjs.Start_32ScreenCode.GDControls_95Shop_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDControls_95Shop_95TextObjects2= [];
gdjs.Start_32ScreenCode.GDOne_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDOne_95TextObjects2= [];
gdjs.Start_32ScreenCode.GDTwo_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDTwo_95TextObjects2= [];
gdjs.Start_32ScreenCode.GDThree_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDThree_95TextObjects2= [];
gdjs.Start_32ScreenCode.GDEllipsis_95TextObjects1= [];
gdjs.Start_32ScreenCode.GDEllipsis_95TextObjects2= [];

gdjs.Start_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.Start_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Blazing-Stars_Looping.mp3", 0, true, 15, 1);
}}

}


{


gdjs.Start_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Start_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.Start_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Start_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Start_32ScreenCode.GDObjectivePrompt_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDObjectivePrompt_95TextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDObjectiveTitle_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDObjectiveTitle_95TextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDStartTextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDStartTextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDControlsTextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDControlsTextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDBlankButtonObjects1.length = 0;
gdjs.Start_32ScreenCode.GDBlankButtonObjects2.length = 0;
gdjs.Start_32ScreenCode.GDW_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDW_95TextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDA_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDA_95TextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDS_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDS_95TextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDD_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDD_95TextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDControls_95Stop_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDControls_95Stop_95TextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDX_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDX_95TextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDMouseButton1Objects1.length = 0;
gdjs.Start_32ScreenCode.GDMouseButton1Objects2.length = 0;
gdjs.Start_32ScreenCode.GDControls_95Grabber_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDControls_95Grabber_95TextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDControls_95Shop_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDControls_95Shop_95TextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDOne_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDOne_95TextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDTwo_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDTwo_95TextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDThree_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDThree_95TextObjects2.length = 0;
gdjs.Start_32ScreenCode.GDEllipsis_95TextObjects1.length = 0;
gdjs.Start_32ScreenCode.GDEllipsis_95TextObjects2.length = 0;

gdjs.Start_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Start_32ScreenCode'] = gdjs.Start_32ScreenCode;
