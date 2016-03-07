/**
 * Created by risha_000 on 02/23/2016.
 */
(function(){

    $(init);

    function init()
    {
        // simple append
        $("#hello")
            .append("Hello World!")
            .append("Is there anyone out there?");

        // Example: appending a new element
        // grab list
        var ulElement = $("#courseList");
        // create DOM element in local variable
        var li = $("<li>AngularJS</li>");
        // append new DOM element to list
        ulElement.append(li);

        // Example: appending to local exports
        // create DOM element in local variable
        li = $("<li>");
        // append to local variable
        li.append("MongoDB");
        // append to list
        ulElement.append(li);


        // Example: appending to beginning
        var studentNames = ["Alice", "Bob", "Charlie", "Dan"];
        var studentList = $("#studentList");
        for(var s = 0; s < studentNames.length; s++)
        {
            var studentLi = $("<li>");
            // so that all names dont get pasted on the same line, we have
            //to print only one name on one line
            var studentName = studentNames[s];
            studentLi.append(studentName);
            studentList.prepend(studentLi);
        }
    }
})();