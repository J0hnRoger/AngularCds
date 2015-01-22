(function() {
    'use strict';

    angular
        .module('expertime')
        .factory('sharepointService', sharepointSvc);

    function sharepointSvc() {
        var items = null;

        var service = {
            getItems: getItems
        };
        return service;

        ////////////////

        // Get list items
        function getItems(webServerRelativeUrl, spListName, rowLimit) {
            var deferred = $q.defer();

            var spContext = new SP.ClientContext(webServerRelativeUrl);
            var spList = spContext.get_web().get_lists().getByTitle(spListName);
            var query = new SP.CamlQuery();
            query.set_viewXml(
                    '<View>' +
                    '<Query>' +
                    '<Where>' +
                    '<And>' +
                    '<Leq><FieldRef Name="MobilityStartDate" /><Value Type="DateTime"><Today /></Value></Leq>' +
                    '<Or>' +
                    '<Gt><FieldRef Name="MobilityEndDate" /><Value Type="DateTime"><Today /></Value></Gt>' +
                    '<IsNull><FieldRef Name="MobilityEndDate" /></IsNull>' +
                    '</Or>' +
                    '</And>' +
                    '</Where>' +
                    '<OrderBy><FieldRef Name="MobilityStartDate" Ascending="FALSE" /><FieldRef Type="DateTime" Name="Created" Ascending="FALSE" /></OrderBy>' +
                    '</Query>' +
                    '<RowLimit>' + rowLimit + '</RowLimit>' +
                    '</View>'
                );
            var spListItems = spList.getItems(query);
            spContext.load(spListItems);
            spContext.executeQueryAsync(function (sender, args) {
                deferred.resolve(spListItems);
            }, function (sender, args) {
                deferred.reject(args);
            });
            
            return deferred.promise;
        }
    }
})();