(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    /*declare event handlers*/
/*    var api = {
        createFormForUser : createFormForUser,
        findAllFormsForUser : findAllFormsForUser,
        deleteFormById : deleteFormById,
        updateFormById : updateFormById
    };
    return api;*/

    function FormService(){

        var forms = [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo",     "userId": 123},
            {"_id": "020", "title": "CDs",      "userId": 234},
        ];

        /*implement event handlers*/

        function createFormForUser(userId, form, callback){
/*            userId["_id"] = (new Date).getTime();*/
            var id = (new Date).getTime();
            var form = {
                "_id" : id,
                "title" : form.title,
                "userId" : userId
            }
            forms.push(form, userId);
            callback(form);
        }

        function findAllFormsForUser(userId, callback){
            var user_forms=[];
            for(var form in forms) {
                if(forms[form].userId == userId ) {
                    user_forms.push(forms[form]);
                }
            }
            callback(user_forms);
        }

        function deleteFormById(formId, callback){
            var findForm = null;
            for(var form in forms) {
                if(forms[form]._id == formId) {
                    findForm = form;
                    break;
                }
            }
            users.splice(form,1);
            callback(forms);
        }

        function updateFormById(formId, newForm, callback){
            for(var form in forms) {
                if(forms[form]._id == formId) {
                    forms[form] = newForm;
                    break;
                }
            }
            callback(newForm);
        }

        return {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        }
    }
})();