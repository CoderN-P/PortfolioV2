
$(document).ready(function () {
    const pathname = $(location).attr("pathname");

    if (pathname === "/") {
        $('#home').removeClass('font-bold');
        $('#home').addClass('text-blue-500 font-bold');
        const physics = $('#physics');
        const webdev = $('#webdev');
        const ai = $('#ai');
        const robotics = $('#robotics');
        const app = $('#app');

        $('#appBlur').width(app.width()+20);
        $('#appBlur').height(app.height()+20);

        $('#roboticsBlur').width(robotics.width()+20);
        $('#roboticsBlur').height(robotics.height()+20);
        $('#aiBlur').width(ai.width()+20);
        $('#aiBlur').height(ai.height()+20);

        $('#physicsBlur').width(physics.width()+20);
        $('#physicsBlur').height(physics.height()+20);
        $('#webdevBlur').width(webdev.width()+20);
        $('#webdevBlur').height(webdev.height()+20);
    }


});