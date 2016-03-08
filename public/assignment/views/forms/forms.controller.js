(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($rootScope, $scope, FormService){

        $scope.orderIn = "title";
        $scope.reverse = false;

        /*declare event handlers*/
        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;

        /*implement event handlers*/

        FormService.findAllFormsForUser($rootScope.userId, function(forms){
            $scope.forms = forms;
        })

        function addForm(newForm){
            FormService.createFormForUser($rootScope.userId, newForm, function(response){
                $scope.response = response;
                $scope.registration = [];
            })
        }

        function updateForm(form){
            FormService.updateFormById(form._id, form, function(response){
                $scope.response = response;
                $scope.registration = [];
            })
        }

        function deleteForm(formId){
            FormService.deleteFormById(formId, function(response){
                $scope.response = response;
            })
        }

        function selectForm(response){
            $scope.response = response;
        }
    }
})();
