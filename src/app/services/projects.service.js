(function() {
    'use strict';

    angular
        .module('app.service.projects', [])
        .factory('projectsService', factory);

    /* @ngInject */
    function factory($firebase, FireBaseRoot, $q) {
        var service = {
            projects : false,
            getProjects : getProjects,
            getIndexOf : getIndexOf
        };
        return service;

        ////////////////

        function getCurrentProject() {
        	var deffered = $q.defer();
        	var projectName;
        	var ref = new Firebase(FireBaseRoot);
            var sync = $firebase(ref.child("activeProject"));
            ref.on("value", function (dataSnapshot) {
                projectName = dataSnapshot.val().activeProject;
                deffered.resolve(projectName);
            });
            return deffered.promise;
        }

        function getProjects(){
            if (this.projects == false){
                var ref = new Firebase(FireBaseRoot + "projects");
                this.projects = $firebase(ref).$asArray();
            }
            return this.projects;
        }

        function getIndexOf(project)
        {
            var index = -1;
            this.projects.forEach(function(element, idx){
                if (element.$id == project.$id)
                    index = idx;
            });
            return index;
        }     

        function resetProjectsTimer(curr){
            var isActive = false;
            this.projects.forEach(function (project){
                project.isActive = false;
            }, curr);
            return isActive;
        }

    }
})();