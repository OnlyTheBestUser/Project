gdjs.Win_32ScreenCode = {};
gdjs.Win_32ScreenCode.GDBackgroundObjects1= [];
gdjs.Win_32ScreenCode.GDBackgroundObjects2= [];
gdjs.Win_32ScreenCode.GDObjectivePrompt_95TextObjects1= [];
gdjs.Win_32ScreenCode.GDObjectivePrompt_95TextObjects2= [];
gdjs.Win_32ScreenCode.GDObjectiveTitle_95TextObjects1= [];
gdjs.Win_32ScreenCode.GDObjectiveTitle_95TextObjects2= [];
gdjs.Win_32ScreenCode.GDWin_95TextObjects1= [];
gdjs.Win_32ScreenCode.GDWin_95TextObjects2= [];
gdjs.Win_32ScreenCode.GDWin_95Title_95TextObjects1= [];
gdjs.Win_32ScreenCode.GDWin_95Title_95TextObjects2= [];
gdjs.Win_32ScreenCode.GDRestart_95TextObjects1= [];
gdjs.Win_32ScreenCode.GDRestart_95TextObjects2= [];

gdjs.Win_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Win_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Win_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Win_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Win_32ScreenCode.conditionTrue_1 = {val:false};
gdjs.Win_32ScreenCode.condition0IsTrue_1 = {val:false};
gdjs.Win_32ScreenCode.condition1IsTrue_1 = {val:false};
gdjs.Win_32ScreenCode.condition2IsTrue_1 = {val:false};


gdjs.Win_32ScreenCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


{


gdjs.Win_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Win_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Win_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.Win_32ScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.Win_32ScreenCode.conditionTrue_1 = gdjs.Win_32ScreenCode.condition1IsTrue_0;
gdjs.Win_32ScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8066316);
}
}}
if (gdjs.Win_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Screen", false);
}}

}


};

gdjs.Win_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Win_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Win_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Win_32ScreenCode.GDObjectivePrompt_95TextObjects1.length = 0;
gdjs.Win_32ScreenCode.GDObjectivePrompt_95TextObjects2.length = 0;
gdjs.Win_32ScreenCode.GDObjectiveTitle_95TextObjects1.length = 0;
gdjs.Win_32ScreenCode.GDObjectiveTitle_95TextObjects2.length = 0;
gdjs.Win_32ScreenCode.GDWin_95TextObjects1.length = 0;
gdjs.Win_32ScreenCode.GDWin_95TextObjects2.length = 0;
gdjs.Win_32ScreenCode.GDWin_95Title_95TextObjects1.length = 0;
gdjs.Win_32ScreenCode.GDWin_95Title_95TextObjects2.length = 0;
gdjs.Win_32ScreenCode.GDRestart_95TextObjects1.length = 0;
gdjs.Win_32ScreenCode.GDRestart_95TextObjects2.length = 0;

gdjs.Win_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Win_32ScreenCode'] = gdjs.Win_32ScreenCode;
