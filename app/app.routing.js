"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var register_component_1 = require('./home/register.component');
var register_service_1 = require('./service/register.service');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'register', component: register_component_1.RegisterComponent }
];
exports.appRoutingProviders = [
    register_service_1.RegisterService
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map