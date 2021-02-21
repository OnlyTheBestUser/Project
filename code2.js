gdjs.Failed_32ScreenCode = {};
gdjs.Failed_32ScreenCode.GDBackgroundObjects1= [];
gdjs.Failed_32ScreenCode.GDBackgroundObjects2= [];
gdjs.Failed_32ScreenCode.GDObjectivePrompt_95TextObjects1= [];
gdjs.Failed_32ScreenCode.GDObjectivePrompt_95TextObjects2= [];
gdjs.Failed_32ScreenCode.GDObjectiveTitle_95TextObjects1= [];
gdjs.Failed_32ScreenCode.GDObjectiveTitle_95TextObjects2= [];
gdjs.Failed_32ScreenCode.GDFailed_95TextObjects1= [];
gdjs.Failed_32ScreenCode.GDFailed_95TextObjects2= [];
gdjs.Failed_32ScreenCode.GDRestart_95TextObjects1= [];
gdjs.Failed_32ScreenCode.GDRestart_95TextObjects2= [];
gdjs.Failed_32ScreenCode.GDScore_95TextObjects1= [];
gdjs.Failed_32ScreenCode.GDScore_95TextObjects2= [];

gdjs.Failed_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Failed_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Failed_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.Failed_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Failed_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Failed_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Failed_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score_Text"), gdjs.Failed_32ScreenCode.GDScore_95TextObjects1);
{for(var i = 0, len = gdjs.Failed_32ScreenCode.GDScore_95TextObjects1.length ;i < len;++i) {
    gdjs.Failed_32ScreenCode.GDScore_95TextObjects1[i].setString("You Scored: $" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("GlobalPlayerMoney")));
}
}}

}


{


{
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 0);
}}

}


};

gdjs.Failed_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Failed_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Failed_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Failed_32ScreenCode.GDObjectivePrompt_95TextObjects1.length = 0;
gdjs.Failed_32ScreenCode.GDObjectivePrompt_95TextObjects2.length = 0;
gdjs.Failed_32ScreenCode.GDObjectiveTitle_95TextObjects1.length = 0;
gdjs.Failed_32ScreenCode.GDObjectiveTitle_95TextObjects2.length = 0;
gdjs.Failed_32ScreenCode.GDFailed_95TextObjects1.length = 0;
gdjs.Failed_32ScreenCode.GDFailed_95TextObjects2.length = 0;
gdjs.Failed_32ScreenCode.GDRestart_95TextObjects1.length = 0;
gdjs.Failed_32ScreenCode.GDRestart_95TextObjects2.length = 0;
gdjs.Failed_32ScreenCode.GDScore_95TextObjects1.length = 0;
gdjs.Failed_32ScreenCode.GDScore_95TextObjects2.length = 0;

gdjs.Failed_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Failed_32ScreenCode'] = gdjs.Failed_32ScreenCode;
