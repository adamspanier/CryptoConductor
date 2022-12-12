'use strict';



;define("crypto-conductor-front/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/adapters/application", ["exports", "@ember-data/adapter/json-api", "@ember/service", "@ember/object"], function (_exports, _jsonApi, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f
  class ApplicationAdapter extends _jsonApi.default {}
  _exports.default = ApplicationAdapter;
});
;define("crypto-conductor-front/adapters/niche", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class NicheAdapter extends _jsonApi.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "namespace", 'api');
    }
  }
  _exports.default = NicheAdapter;
});
;define("crypto-conductor-front/adapters/profile", ["exports", "crypto-conductor-front/adapters/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"crypto-conductor-front/adapters/application"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class ProfileAdapter extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "namespace", 'api');
    }
  }
  _exports.default = ProfileAdapter;
});
;define("crypto-conductor-front/adapters/project-entry", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class ProjectEntryAdapter extends _jsonApi.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "namespace", 'api');
    }
  }
  _exports.default = ProjectEntryAdapter;
});
;define("crypto-conductor-front/adapters/project", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class ProjectAdapter extends _jsonApi.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "namespace", 'api');
    }
  }
  _exports.default = ProjectAdapter;
});
;define("crypto-conductor-front/adapters/specialty", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class SpecialtyAdapter extends _jsonApi.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "namespace", 'api');
    }
  }
  _exports.default = SpecialtyAdapter;
});
;define("crypto-conductor-front/adapters/user", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class UserAdapter extends _jsonApi.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "namespace", 'api');
    }
    // Define query record method for querying users
    queryRecord(store, type, query) {
      return fetch('/api/users');
    }
  }
  _exports.default = UserAdapter;
});
;define("crypto-conductor-front/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "crypto-conductor-front/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"crypto-conductor-front/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("crypto-conductor-front/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/components/account-information", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/debug", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _tracking, _debug, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/debug",0,"@ember/object",0,"@ember/service",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! Template for the account management component }}
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  
  {{!Screen class that sets window scaling}}
  <div class="screen">
  
    {{#if this.authManager.isLoggedIn}}
  
      {{!Define content area in center of screen}}
      <div class="content-area">
  
        {{!Define account background box}}
        <div class="account-background"></div>
  
        {{!Define content area header}}
        <div class="content-header">
            <div class="content-title">
              Account Management Console
            </div>
        </div>
  
        {{!Display account information}}
        <div class="account-info">
  
          {{!Setup inner div for arrangement of account information}}
          <div class="account-info-text">
  
            {{#each @user_data.user as |user|}}
              {{user.groups}}
            {{#each @user_data.profile as |profile|}}
  
            {{!Setup account table structure}}
            <table id="account-table">
              <tr>
                <td>User First:</td>
                <td>
                  <div class="field">
                    <Input
                      aria-label="UserFirst"
                      id = "uf"
                      @type="type"
                      @value={{user.first_name}}
                      {{on "input" this.validateNames}}
                    />
                  </div>
                </td>
                <td width="100px">Specialty:</td>
                  <select class="account-drops" id="spec" disabled={{this.isntAdmin}}>
                      {{#each this.testSpecialties as |spec|}}
                        <option>{{spec.name}}</option>
                      {{/each}}
                  </select>
                <td></td>
              </tr>
              <tr>
                <td width="100px">User Last:</td>
                <td width="200px">
                  <div class="field">
                    <Input
                      aria-label="UserLast"
                      id = "ul"
                      @type="text"
                      @value={{user.last_name}}
                      {{on "input" this.validateNames}}
                    />
                  </div>
                </td>
                <td>Niche:</td>
                  <select class="account-drops" id="nich" disabled={{this.isntAdmin}}>
                      {{#each this.testNiches as |niche|}}
                        <option>{{niche.name}}</option>
                      {{/each}}
                  </select>
                <td></td>
              </tr>
              <tr>
                <td>User MI:</td>
                <td>
                  <div class="field">
                    <Input
                      aria-label="UserMi"
                      id = "um"
                      @type="text"
                      @value={{profile.mi}}
                      {{on "input" this.validateNames}}
                    />
                  </div>
                </td>
                <td>Role:</td>
                <td>
                  <select class="account-drops" id="rol" disabled={{this.isntAdmin}}>
                      {{#each this.testRoles as |role|}}
                        <option>{{role.name}}</option>
                      {{/each}}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Username:</td>
                <td>
                  <div class="field">
                    <Input
                      aria-label="UserName"
                      id = "un"
                      @type="text"
                      disabled={{this.isntAdmin}}
                      @value={{user.username}}
                      {{on "input" this.validateNames}}
                    />
                  </div>
                </td>
                <td>Projects:</td>
                <td>
                  <select class="account-drops" id="pro" disabled={{this.isntAdmin}}>
                      {{#each this.testProjects as |proj|}}
                        <option>{{proj.name}}</option>
                      {{/each}}
                  </select>
                </td>
              </tr>
              <tr>
                <td>User Balance:</td>
                <td>
                  <div class="field">
                    <Input
                      aria-label="UserBalance"
                      id = "ub"
                      @type="text"
                      disabled={{this.isntAdmin}}
                      @value={{profile.balance}}
                      {{on "input" this.validateNames}}
                    />
                  </div>
                </td>
                <td>Active:</td>
                <td>
                  <select class="account-drops" id="act">
                      {{#each this.testActive as |act|}}
                        <option>{{act.status}}</option>
                      {{/each}}
                  </select>
                </td>
              </tr>
            </table>
            {{/each}}
            {{/each}}
            <div class="mod-button">
              <Input
                aria-label="update"
                @type="button"
                @value={{this.update}}
                {{on "click" this.updateRecord}}
              />
              <Input
                aria-label="delete"
                @type="button"
                @value={{this.delete}}
                {{on "click" this.updateRecord}}
              />
            </div>
          </div>
        </div>
      </div>
    {{else}}
      {{this.redirectToLogin}}
    {{/if}}
  </div>
  
  */
  {
    "id": "k+Sns7XU",
    "block": "[[[10,\"link\"],[14,\"rel\",\"stylesheet\"],[14,6,\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\"],[12],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"screen\"],[12],[1,\"\\n\\n\"],[41,[30,0,[\"authManager\",\"isLoggedIn\"]],[[[1,\"\\n\"],[1,\"    \"],[10,0],[14,0,\"content-area\"],[12],[1,\"\\n\\n\"],[1,\"      \"],[10,0],[14,0,\"account-background\"],[12],[13],[1,\"\\n\\n\"],[1,\"      \"],[10,0],[14,0,\"content-header\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"content-title\"],[12],[1,\"\\n            Account Management Console\\n          \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[1,\"      \"],[10,0],[14,0,\"account-info\"],[12],[1,\"\\n\\n\"],[1,\"        \"],[10,0],[14,0,\"account-info-text\"],[12],[1,\"\\n\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"user\"]]],null]],null],null,[[[1,\"            \"],[1,[30,2,[\"groups\"]]],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1,[\"profile\"]]],null]],null],null,[[[1,\"\\n\"],[1,\"          \"],[10,\"table\"],[14,1,\"account-table\"],[12],[1,\"\\n            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"User First:\"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n                  \"],[8,[39,3],[[24,\"aria-label\",\"UserFirst\"],[24,1,\"uf\"],[4,[38,4],[\"input\",[30,0,[\"validateNames\"]]],null]],[[\"@type\",\"@value\"],[\"type\",[30,2,[\"first_name\"]]]],null],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"td\"],[14,\"width\",\"100px\"],[12],[1,\"Specialty:\"],[13],[1,\"\\n                \"],[10,\"select\"],[14,0,\"account-drops\"],[14,1,\"spec\"],[15,\"disabled\",[30,0,[\"isntAdmin\"]]],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"testSpecialties\"]]],null]],null],null,[[[1,\"                      \"],[10,\"option\"],[12],[1,[30,4,[\"name\"]]],[13],[1,\"\\n\"]],[4]],null],[1,\"                \"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[14,\"width\",\"100px\"],[12],[1,\"User Last:\"],[13],[1,\"\\n              \"],[10,\"td\"],[14,\"width\",\"200px\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n                  \"],[8,[39,3],[[24,\"aria-label\",\"UserLast\"],[24,1,\"ul\"],[4,[38,4],[\"input\",[30,0,[\"validateNames\"]]],null]],[[\"@type\",\"@value\"],[\"text\",[30,2,[\"last_name\"]]]],null],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"Niche:\"],[13],[1,\"\\n                \"],[10,\"select\"],[14,0,\"account-drops\"],[14,1,\"nich\"],[15,\"disabled\",[30,0,[\"isntAdmin\"]]],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"testNiches\"]]],null]],null],null,[[[1,\"                      \"],[10,\"option\"],[12],[1,[30,5,[\"name\"]]],[13],[1,\"\\n\"]],[5]],null],[1,\"                \"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"User MI:\"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n                  \"],[8,[39,3],[[24,\"aria-label\",\"UserMi\"],[24,1,\"um\"],[4,[38,4],[\"input\",[30,0,[\"validateNames\"]]],null]],[[\"@type\",\"@value\"],[\"text\",[30,3,[\"mi\"]]]],null],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"Role:\"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,\"select\"],[14,0,\"account-drops\"],[14,1,\"rol\"],[15,\"disabled\",[30,0,[\"isntAdmin\"]]],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"testRoles\"]]],null]],null],null,[[[1,\"                      \"],[10,\"option\"],[12],[1,[30,6,[\"name\"]]],[13],[1,\"\\n\"]],[6]],null],[1,\"                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"Username:\"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n                  \"],[8,[39,3],[[24,\"aria-label\",\"UserName\"],[24,1,\"un\"],[16,\"disabled\",[30,0,[\"isntAdmin\"]]],[4,[38,4],[\"input\",[30,0,[\"validateNames\"]]],null]],[[\"@type\",\"@value\"],[\"text\",[30,2,[\"username\"]]]],null],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"Projects:\"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,\"select\"],[14,0,\"account-drops\"],[14,1,\"pro\"],[15,\"disabled\",[30,0,[\"isntAdmin\"]]],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"testProjects\"]]],null]],null],null,[[[1,\"                      \"],[10,\"option\"],[12],[1,[30,7,[\"name\"]]],[13],[1,\"\\n\"]],[7]],null],[1,\"                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"User Balance:\"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n                  \"],[8,[39,3],[[24,\"aria-label\",\"UserBalance\"],[24,1,\"ub\"],[16,\"disabled\",[30,0,[\"isntAdmin\"]]],[4,[38,4],[\"input\",[30,0,[\"validateNames\"]]],null]],[[\"@type\",\"@value\"],[\"text\",[30,3,[\"balance\"]]]],null],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"Active:\"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,\"select\"],[14,0,\"account-drops\"],[14,1,\"act\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"testActive\"]]],null]],null],null,[[[1,\"                      \"],[10,\"option\"],[12],[1,[30,8,[\"status\"]]],[13],[1,\"\\n\"]],[8]],null],[1,\"                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[3]],null]],[2]],null],[1,\"          \"],[10,0],[14,0,\"mod-button\"],[12],[1,\"\\n            \"],[8,[39,3],[[24,\"aria-label\",\"update\"],[4,[38,4],[\"click\",[30,0,[\"updateRecord\"]]],null]],[[\"@type\",\"@value\"],[\"button\",[30,0,[\"update\"]]]],null],[1,\"\\n            \"],[8,[39,3],[[24,\"aria-label\",\"delete\"],[4,[38,4],[\"click\",[30,0,[\"updateRecord\"]]],null]],[[\"@type\",\"@value\"],[\"button\",[30,0,[\"delete\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[1,[30,0,[\"redirectToLogin\"]]],[1,\"\\n\"]],[]]],[13],[1,\"\\n\"]],[\"@user_data\",\"user\",\"profile\",\"spec\",\"niche\",\"role\",\"proj\",\"act\"],false,[\"if\",\"each\",\"-track-array\",\"input\",\"on\"]]",
    "moduleName": "crypto-conductor-front/components/account-information.hbs",
    "isStrictMode": false
  });
  let AccountInformationComponent = (_class = class AccountInformationComponent extends _component2.default {
    //Used if role == leader
    //Used if role == leader

    // For testing purposes

    // For testing purposes

    // For testing purposes

    // For testing purposes

    // For testing purposes

    // Called on UI instantiation
    constructor(owner, args) {
      super(owner, args);

      // If usergroup is leader, mark lead is true
      _initializerDefineProperty(this, "authManager", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
      _initializerDefineProperty(this, "userFirst", _descriptor3, this);
      _initializerDefineProperty(this, "userLast", _descriptor4, this);
      _initializerDefineProperty(this, "userMi", _descriptor5, this);
      _initializerDefineProperty(this, "username", _descriptor6, this);
      _initializerDefineProperty(this, "userBalance", _descriptor7, this);
      _initializerDefineProperty(this, "isLead", _descriptor8, this);
      _initializerDefineProperty(this, "update", _descriptor9, this);
      _initializerDefineProperty(this, "delete", _descriptor10, this);
      _initializerDefineProperty(this, "isntAdmin", _descriptor11, this);
      _initializerDefineProperty(this, "testSpecialties", _descriptor12, this);
      _initializerDefineProperty(this, "testNiches", _descriptor13, this);
      _initializerDefineProperty(this, "testRoles", _descriptor14, this);
      _initializerDefineProperty(this, "testProjects", _descriptor15, this);
      _initializerDefineProperty(this, "testActive", _descriptor16, this);
      if (this.authManager.usergroup == 'Leader') {
        this.isLead = true;
      }
      if (this.authManager.usergroup == 'Leader') {
        this.isntAdmin = false;
      }
      console.log(this.isntAdmin);
    }

    // Basic print function
    print() {
      console.log(this.userLast);
    }

    // JS Validation, Sanitization, Escaping
    validateNames() {
      uf.value = uf.value.replace(/[&*<>/';{}]/g, '');
      ul.value = ul.value.replace(/[&*<>/';{}]/g, '');
      um.value = um.value.replace(/[&*<>/';{}]/g, '');
      un.value = un.value.replace(/[&*<>/';{}]/g, '');
      ub.value = ub.value.replace(/[&*<>/';{}]/g, '');
    }

    // Creates record for updating
    updateRecord() {
      var record = {
        first: uf.value,
        mi: um.value,
        last: ul.value,
        username: un.value,
        balance: ub.value,
        specialty: spec.value,
        niche: nich.value,
        role: rol.value,
        projects: this.testProjects,
        active: act.value
      };
      console.log(record);
    }

    // Handler for unauthenticated page requests
    redirectToLogin() {
      this.router.transitionTo('login');
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "authManager", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "userFirst", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Adam';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "userLast", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Spanier';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "userMi", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'M';
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "username", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Syntax';
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "userBalance", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '$0.00';
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "isLead", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "update", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Update';
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "delete", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Delete';
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "isntAdmin", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "testSpecialties", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        name: 'Technology'
      }, {
        name: 'Legal'
      }, {
        name: 'Business'
      }];
    }
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "testNiches", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        name: 'Cybersecurity',
        parent: 'Technology'
      }, {
        name: 'Risk',
        parent: 'Legal'
      }, {
        name: 'Marketing',
        parent: 'Business'
      }];
    }
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "testRoles", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        name: 'Associate'
      }, {
        name: 'Client'
      }, {
        name: 'Knight'
      }, {
        name: 'Leader'
      }];
    }
  }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "testProjects", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        name: 'CryptoThing'
      }, {
        name: 'BitStream'
      }, {
        name: 'NebulousThing'
      }];
    }
  }), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "testActive", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        status: 'Active'
      }, {
        status: 'Inactive'
      }, {
        status: 'Sabbatical'
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "print", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "print"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "validateNames", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "validateNames"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateRecord", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "updateRecord"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "redirectToLogin", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToLogin"), _class.prototype)), _class);
  _exports.default = AccountInformationComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, AccountInformationComponent);
});
;define("crypto-conductor-front/components/contact-window", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/debug", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _tracking, _debug, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/debug",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  
  {{!Screen class that sets window scaling}}
  <div class="screen">
  
      {{!Define contact background box}}
      <div class="contact-background"></div>
  
      <div class="contact-content-title">
        Contact Us
      </div>
  
      {{!Display account information}}
      <div class="contact-info">
  
        <table id="contact-table">
          <tr>
            <td>Full Name</td>
            <td>
              <Input
                aria-label="name"
                id = "n"
                @type="type"
                size = "30"
                @value={{this.name}}
                {{on "input" this.validateName}}
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <Input
                aria-label="email"
                id = "e"
                @type="type"
                size = "30"
                @value={{this.email}}
                {{on "input" this.validateEmail}}
              />
            </td>
          </tr>
          <tr>
            <td>Message</td>
            <td>
              <Textarea
                aria-label="message"
                id = "m"
                @value={{this.message}}
                rows="12"
                cols="30"
                {{on "input" this.validateName}}
              />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div id="submit-contact">
                <Input
                  aria-label="send"
                  disabled = {{this.disableSubmit}}
                  id = "s"
                  @type="submit"
                  @value={{this.send}}
                  {{on "click" this.sendEmail}}
                />
            </div>
            </td>
          </tr>
        </table>
      </div>
  </div>
  
  */
  {
    "id": "BsE08hOs",
    "block": "[[[10,\"link\"],[14,\"rel\",\"stylesheet\"],[14,6,\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\"],[12],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"screen\"],[12],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"contact-background\"],[12],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"contact-content-title\"],[12],[1,\"\\n      Contact Us\\n    \"],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"contact-info\"],[12],[1,\"\\n\\n      \"],[10,\"table\"],[14,1,\"contact-table\"],[12],[1,\"\\n        \"],[10,\"tr\"],[12],[1,\"\\n          \"],[10,\"td\"],[12],[1,\"Full Name\"],[13],[1,\"\\n          \"],[10,\"td\"],[12],[1,\"\\n            \"],[8,[39,0],[[24,\"aria-label\",\"name\"],[24,1,\"n\"],[24,\"size\",\"30\"],[4,[38,1],[\"input\",[30,0,[\"validateName\"]]],null]],[[\"@type\",\"@value\"],[\"type\",[30,0,[\"name\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"tr\"],[12],[1,\"\\n          \"],[10,\"td\"],[12],[1,\"Email\"],[13],[1,\"\\n          \"],[10,\"td\"],[12],[1,\"\\n            \"],[8,[39,0],[[24,\"aria-label\",\"email\"],[24,1,\"e\"],[24,\"size\",\"30\"],[4,[38,1],[\"input\",[30,0,[\"validateEmail\"]]],null]],[[\"@type\",\"@value\"],[\"type\",[30,0,[\"email\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"tr\"],[12],[1,\"\\n          \"],[10,\"td\"],[12],[1,\"Message\"],[13],[1,\"\\n          \"],[10,\"td\"],[12],[1,\"\\n            \"],[8,[39,2],[[24,\"aria-label\",\"message\"],[24,1,\"m\"],[24,\"rows\",\"12\"],[24,\"cols\",\"30\"],[4,[38,1],[\"input\",[30,0,[\"validateName\"]]],null]],[[\"@value\"],[[30,0,[\"message\"]]]],null],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"tr\"],[12],[1,\"\\n          \"],[10,\"td\"],[14,\"colspan\",\"2\"],[12],[1,\"\\n            \"],[10,0],[14,1,\"submit-contact\"],[12],[1,\"\\n              \"],[8,[39,0],[[24,\"aria-label\",\"send\"],[16,\"disabled\",[30,0,[\"disableSubmit\"]]],[24,1,\"s\"],[4,[38,1],[\"click\",[30,0,[\"sendEmail\"]]],null]],[[\"@type\",\"@value\"],[\"submit\",[30,0,[\"send\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"input\",\"on\",\"textarea\"]]",
    "moduleName": "crypto-conductor-front/components/contact-window.hbs",
    "isStrictMode": false
  });
  let ContactWindowComponent = (_class = class ContactWindowComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "name", _descriptor, this);
      _initializerDefineProperty(this, "email", _descriptor2, this);
      _initializerDefineProperty(this, "message", _descriptor3, this);
      _initializerDefineProperty(this, "send", _descriptor4, this);
      _initializerDefineProperty(this, "good", _descriptor5, this);
    }
    // JS Validation, Sanitization for name
    validateName() {
      n.value = n.value.replace(/[!@#$%^(<>?)&*<>/';{}1234567890]/g, '');
    }

    // JS Validation, Sanitization for message
    validateMessage() {
      m.value = m.value.replace(/[@#%^&*<>/';{}]/g, '');
    }

    // JS Validation, Sanitization for email input
    validateEmail() {
      e.value = e.value.replace(/[&*<>/';{}]/g, '');
      const atArray = e.value.split("@");
      var atLength = atArray.length; //Must be 2
      if (atLength == 2) {
        const comArray = atArray[1].split(".");
        var comLength = comArray.length;
        if (comLength == 2) {
          var domainLength = comArray[1].length;
          if (domainLength > 1 && domainLength < 4) {
            console.log(domainLength);
            this.good = true;
          } else {
            this.good = false;
          }
        } else {
          this.good = false;
        }
      } else {
        this.good = false;
      }
      console.log(this.good);
    }
    get disableSubmit() {
      //if either value is empty we don't want to allow submitting the form
      return !this.name.length || !this.email.length || !this.message.length || this.good == false;
    }

    // Creates record for sending an email
    sendEmail() {
      var data = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      console.log(data);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "email", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "message", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "send", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Send';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "good", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "validateName", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "validateName"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "validateMessage", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "validateMessage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "validateEmail", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "validateEmail"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sendEmail", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "sendEmail"), _class.prototype)), _class);
  _exports.default = ContactWindowComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ContactWindowComponent);
});
;define("crypto-conductor-front/components/footer-display", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!Screen class that sets window scaling}}
  <div class="screen">
  
    {{!Format for footer}}
    <div class="footer">
  
      Copyright 2021 | RountTable21 Inc.
  
    </div>
  
  </div>
  
  */
  {
    "id": "oY3L/GDU",
    "block": "[[[10,0],[14,0,\"screen\"],[12],[1,\"\\n\\n\"],[1,\"  \"],[10,0],[14,0,\"footer\"],[12],[1,\"\\n\\n    Copyright 2021 | RountTable21 Inc.\\n\\n  \"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "crypto-conductor-front/components/footer-display.hbs",
    "isStrictMode": false
  });
  class FooterDisplayComponent extends _component2.default {}
  _exports.default = FooterDisplayComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, FooterDisplayComponent);
});
;define("crypto-conductor-front/components/header-display", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!Screen class that sets window scaling}}
  <div class="screen">
  
    {{!Contains header content box}}
    <div class="header-content-area">
  
      {{!Contians site title}}
      <div class="site-title">
        <LinkTo @route="login">CryptoConductor</LinkTo>
      </div>
  
      {{!Contains header links}}
      <div class="header-links">
        <LinksMenu/>
      </div>
    </div>
  </div>
  
  */
  {
    "id": "Ervh0BxD",
    "block": "[[[10,0],[14,0,\"screen\"],[12],[1,\"\\n\\n\"],[1,\"  \"],[10,0],[14,0,\"header-content-area\"],[12],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"site-title\"],[12],[1,\"\\n      \"],[8,[39,0],null,[[\"@route\"],[\"login\"]],[[\"default\"],[[[[1,\"CryptoConductor\"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[14,0,\"header-links\"],[12],[1,\"\\n      \"],[8,[39,1],null,null,null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"link-to\",\"links-menu\"]]",
    "moduleName": "crypto-conductor-front/components/header-display.hbs",
    "isStrictMode": false
  });
  class HeaderDisplayComponent extends _component2.default {}
  _exports.default = HeaderDisplayComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, HeaderDisplayComponent);
});
;define("crypto-conductor-front/components/links-menu", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@glimmer/tracking", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{!Table containing the site links}}
  <table>
    <tr>
      {{! Display if authenticated }}
      {{#if this.authManager.isLoggedIn}}
        <td width="100px" align="center" style="border: 0px">
          <LinkTo @route="projectDashboard">Project</LinkTo>
        </td>
      {{/if}}
  
      {{! Display if authenticated }}
      {{#if this.authManager.isLoggedIn}}
        <td width="100px" align="center" style="border: 0px">
          <LinkTo @route="accountManagement">Account</LinkTo>
        </td>
      {{/if}}
  
      {{! Show contact information for anonymous users }}
      <td width="100px" align="center" style="border: 0px">
        <LinkTo @route="contactPage">Contact</LinkTo>
      </td>
  
      {{! Display if authenticated }}
      {{#if this.authManager.isLoggedIn}}
        <td width="100px" align="center" style="border: 0px">
          <span {{on "click" this.logoutLink}} style="cursor: pointer;">Logout</span>
        </td>
      {{/if}}
    </tr>
  </table>
  
  */
  {
    "id": "XMmEUZfb",
    "block": "[[[10,\"table\"],[12],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n\"],[41,[30,0,[\"authManager\",\"isLoggedIn\"]],[[[1,\"      \"],[10,\"td\"],[14,\"width\",\"100px\"],[14,\"align\",\"center\"],[14,5,\"border: 0px\"],[12],[1,\"\\n        \"],[8,[39,1],null,[[\"@route\"],[\"projectDashboard\"]],[[\"default\"],[[[[1,\"Project\"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"authManager\",\"isLoggedIn\"]],[[[1,\"      \"],[10,\"td\"],[14,\"width\",\"100px\"],[14,\"align\",\"center\"],[14,5,\"border: 0px\"],[12],[1,\"\\n        \"],[8,[39,1],null,[[\"@route\"],[\"accountManagement\"]],[[\"default\"],[[[[1,\"Account\"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[1,\"    \"],[10,\"td\"],[14,\"width\",\"100px\"],[14,\"align\",\"center\"],[14,5,\"border: 0px\"],[12],[1,\"\\n      \"],[8,[39,1],null,[[\"@route\"],[\"contactPage\"]],[[\"default\"],[[[[1,\"Contact\"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"authManager\",\"isLoggedIn\"]],[[[1,\"      \"],[10,\"td\"],[14,\"width\",\"100px\"],[14,\"align\",\"center\"],[14,5,\"border: 0px\"],[12],[1,\"\\n        \"],[11,1],[24,5,\"cursor: pointer;\"],[4,[38,2],[\"click\",[30,0,[\"logoutLink\"]]],null],[12],[1,\"Logout\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"if\",\"link-to\",\"on\"]]",
    "moduleName": "crypto-conductor-front/components/links-menu.hbs",
    "isStrictMode": false
  });
  let LinksMenuComponent = (_class = class LinksMenuComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "authManager", _descriptor, this);
      _initializerDefineProperty(this, "logout", _descriptor2, this);
    }
    // Calls the logout function in the authManager
    logoutLink() {
      var logoutData = {
        username: this.authManager.username
      };
      this.authManager.logout(logoutData);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "authManager", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "logout", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Logout';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "logoutLink", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "logoutLink"), _class.prototype)), _class);
  _exports.default = LinksMenuComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, LinksMenuComponent);
});
;define("crypto-conductor-front/components/login-ui", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/debug", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _tracking, _debug, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/debug",0,"@ember/object",0,"@ember/service",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  
  {{!Screen class that sets window scaling}}
  <div class="screen">
  
    {{#if this.authManager.isLoggedIn}}
      {{!logged in. Redirect.}}
      {{this.redirectToDashboard}}
    {{else}}
  
      {{!Define content area in center of screen}}
      <div class="content-area">
  
        {{!Define two cell login table, one side with login, other with pic}}
        <table class="login-table"><tr>
  
          {{!Contains login content}}
          <td class="login-cell">
  
            {{!Define login form}}
            <form>
  
              {{!Username input div}}
              <div class="user-input">
                <div class="field-label">
                  <span class="material-symbols-outlined">person</span>
                </div>
  
                <div class="field">
                  <Input
                    aria-label="username"
                    id = "un"
                    @type="text"
                    @value={{this.UserName}}
                    {{on "input" this.validateNames}}
                  />
                </div>
              </div>
  
              {{!Password input div}}
              <div class="user-input">
                <div class="field-label">
                  <span class="material-symbols-outlined">key</span>
                </div>
  
                <div class="field">
                  <Input
                    aria-label="password"
                    id = 'pw'
                    @type="password"
                    @value={{this.PassWord}}
                    {{on "input" this.validateNames}}
                  />
                </div>
              </div>
  
              {{!Remember Me div}}
              <div class="user-input">
                <div class="field-label">
                  <span class="material-symbols-outlined">check</span>
                </div>
  
                <div class="check-field">
                  <Input
                    aria-label="remember"
                    @type="checkbox"
                    @checked = {{this.remember}}
                  />
                  remember me
                </div>
  
                {{!Submit div div}}
                <div class="submit-field">
                  <Input
                    aria-label = "submit"
                    disabled = {{this.disableSubmit}}
                    @type="button"
                    @value="Login"
                    {{on "click" this.submitData}}
                  />
                </div>
              </div>
  
            </form>
          </td><td style="border: 0px"></td>
        </tr></table>
      </div>
    {{/if}}
  </div>
  
  */
  {
    "id": "7BUMyg6A",
    "block": "[[[10,\"link\"],[14,\"rel\",\"stylesheet\"],[14,6,\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\"],[12],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"screen\"],[12],[1,\"\\n\\n\"],[41,[30,0,[\"authManager\",\"isLoggedIn\"]],[[[1,\"    \"],[1,[30,0,[\"redirectToDashboard\"]]],[1,\"\\n\"]],[]],[[[1,\"\\n\"],[1,\"    \"],[10,0],[14,0,\"content-area\"],[12],[1,\"\\n\\n\"],[1,\"      \"],[10,\"table\"],[14,0,\"login-table\"],[12],[10,\"tr\"],[12],[1,\"\\n\\n\"],[1,\"        \"],[10,\"td\"],[14,0,\"login-cell\"],[12],[1,\"\\n\\n\"],[1,\"          \"],[10,\"form\"],[12],[1,\"\\n\\n\"],[1,\"            \"],[10,0],[14,0,\"user-input\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"field-label\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"material-symbols-outlined\"],[12],[1,\"person\"],[13],[1,\"\\n              \"],[13],[1,\"\\n\\n              \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n                \"],[8,[39,1],[[24,\"aria-label\",\"username\"],[24,1,\"un\"],[4,[38,2],[\"input\",[30,0,[\"validateNames\"]]],null]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"UserName\"]]]],null],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\\n\"],[1,\"            \"],[10,0],[14,0,\"user-input\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"field-label\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"material-symbols-outlined\"],[12],[1,\"key\"],[13],[1,\"\\n              \"],[13],[1,\"\\n\\n              \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n                \"],[8,[39,1],[[24,\"aria-label\",\"password\"],[24,1,\"pw\"],[4,[38,2],[\"input\",[30,0,[\"validateNames\"]]],null]],[[\"@type\",\"@value\"],[\"password\",[30,0,[\"PassWord\"]]]],null],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\\n\"],[1,\"            \"],[10,0],[14,0,\"user-input\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"field-label\"],[12],[1,\"\\n                \"],[10,1],[14,0,\"material-symbols-outlined\"],[12],[1,\"check\"],[13],[1,\"\\n              \"],[13],[1,\"\\n\\n              \"],[10,0],[14,0,\"check-field\"],[12],[1,\"\\n                \"],[8,[39,1],[[24,\"aria-label\",\"remember\"]],[[\"@type\",\"@checked\"],[\"checkbox\",[30,0,[\"remember\"]]]],null],[1,\"\\n                remember me\\n              \"],[13],[1,\"\\n\\n\"],[1,\"              \"],[10,0],[14,0,\"submit-field\"],[12],[1,\"\\n                \"],[8,[39,1],[[24,\"aria-label\",\"submit\"],[16,\"disabled\",[30,0,[\"disableSubmit\"]]],[4,[38,2],[\"click\",[30,0,[\"submitData\"]]],null]],[[\"@type\",\"@value\"],[\"button\",\"Login\"]],null],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\\n          \"],[13],[1,\"\\n        \"],[13],[10,\"td\"],[14,5,\"border: 0px\"],[12],[13],[1,\"\\n      \"],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]]],[13],[1,\"\\n\"]],[],false,[\"if\",\"input\",\"on\"]]",
    "moduleName": "crypto-conductor-front/components/login-ui.hbs",
    "isStrictMode": false
  });
  let LoginUiComponent = (_class = class LoginUiComponent extends _component2.default {
    constructor(owner, args) {
      super(owner, args);
      _initializerDefineProperty(this, "authManager", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
      _initializerDefineProperty(this, "UserName", _descriptor3, this);
      _initializerDefineProperty(this, "PassWord", _descriptor4, this);
      _initializerDefineProperty(this, "remember", _descriptor5, this);
      _initializerDefineProperty(this, "anonStatus", _descriptor6, this);
      this.authManager.print();
    }
    get disableSubmit() {
      //if either value is empty we don't want to allow submitting the form
      return !this.UserName.length || !this.PassWord.length;
    }
    validateNames() {
      un.value = un.value.replace(/[&*<>/';{}]/g, '');
      pw.value = pw.value.replace(/[&*<>/';{}]/g, '');
    }
    submitData() {
      var loginData = {
        username: this.UserName,
        password: this.PassWord
      };

      //pass into authManager
      this.authManager.login(loginData);
    }
    redirectToDashboard() {
      this.router.transitionTo('projectDashboard');
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "authManager", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "UserName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "PassWord", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "remember", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "anonStatus", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "validateNames", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "validateNames"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "submitData", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "submitData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "redirectToDashboard", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToDashboard"), _class.prototype)), _class);
  _exports.default = LoginUiComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, LoginUiComponent);
});
;define("crypto-conductor-front/components/project-listing", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/debug", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _tracking, _debug, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/debug",0,"@ember/object",0,"@ember/service",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! Put in css under the component }}
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  
  {{!Screen class that sets window scaling}}
  <div class="screen">
  
    {{#if this.authManager.isLoggedIn}}
  
      {{!Define content area in center of screen}}
      <div class="content-area">
  
        {{!Define project background box}}
        <div class="project-background"></div>
  
        {{!Define content area header}}
        <div class="content-header">
            <div class="content-username-specialty">
              {{this.authManager.username}} - {{this.specialty}}
            </div>
  
            <div class="content-role">
              {{this.authManager.usergroup}} Console
            </div>
        </div>
  
        {{!Display all pertinent projects}}
        <div class="project-listing">
          <div class="listing-text">
            <table width="100%" border="1px">
              {{#each @user_projects as |proj|}}
  
                <tr>
                  <td>{{proj.id}}</td>
                  <td width="300px">{{proj.name}}</td>
  
                  {{! Show only if leader }}
                  {{#if this.isLead}}
                    <td><LinkTo @route="projectManagement">{{proj.name}} Dashboard</LinkTo></td>
                  {{/if}}
                  <td>Project Entries</td>
                </tr>
              {{/each}}
  
            </table>
          </div>
        </div>
      </div>
      {{else}}
        test
        {{this.redirectToLogin}}
      {{/if}}
  </div>
  
  */
  {
    "id": "b64o6Pv5",
    "block": "[[[10,\"link\"],[14,\"rel\",\"stylesheet\"],[14,6,\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\"],[12],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"screen\"],[12],[1,\"\\n\\n\"],[41,[30,0,[\"authManager\",\"isLoggedIn\"]],[[[1,\"\\n\"],[1,\"    \"],[10,0],[14,0,\"content-area\"],[12],[1,\"\\n\\n\"],[1,\"      \"],[10,0],[14,0,\"project-background\"],[12],[13],[1,\"\\n\\n\"],[1,\"      \"],[10,0],[14,0,\"content-header\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"content-username-specialty\"],[12],[1,\"\\n            \"],[1,[30,0,[\"authManager\",\"username\"]]],[1,\" - \"],[1,[30,0,[\"specialty\"]]],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"content-role\"],[12],[1,\"\\n            \"],[1,[30,0,[\"authManager\",\"usergroup\"]]],[1,\" Console\\n          \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[1,\"      \"],[10,0],[14,0,\"project-listing\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"listing-text\"],[12],[1,\"\\n          \"],[10,\"table\"],[14,\"width\",\"100%\"],[14,\"border\",\"1px\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,1]],null]],null],null,[[[1,\"\\n              \"],[10,\"tr\"],[12],[1,\"\\n                \"],[10,\"td\"],[12],[1,[30,2,[\"id\"]]],[13],[1,\"\\n                \"],[10,\"td\"],[14,\"width\",\"300px\"],[12],[1,[30,2,[\"name\"]]],[13],[1,\"\\n\\n\"],[41,[30,0,[\"isLead\"]],[[[1,\"                  \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@route\"],[\"projectManagement\"]],[[\"default\"],[[[[1,[30,2,[\"name\"]]],[1,\" Dashboard\"]],[]]]]],[13],[1,\"\\n\"]],[]],null],[1,\"                \"],[10,\"td\"],[12],[1,\"Project Entries\"],[13],[1,\"\\n              \"],[13],[1,\"\\n\"]],[2]],null],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[1,\"      test\\n      \"],[1,[30,0,[\"redirectToLogin\"]]],[1,\"\\n\"]],[]]],[13],[1,\"\\n\"]],[\"@user_projects\",\"proj\"],false,[\"if\",\"each\",\"-track-array\",\"link-to\"]]",
    "moduleName": "crypto-conductor-front/components/project-listing.hbs",
    "isStrictMode": false
  });
  let ProjectListingComponent = (_class = class ProjectListingComponent extends _component2.default {
    // Called on UI instantiation
    constructor(owner, args) {
      super(owner, args);

      // If usergroup is leader, mark lead is true
      _initializerDefineProperty(this, "authManager", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
      _initializerDefineProperty(this, "store", _descriptor3, this);
      _initializerDefineProperty(this, "projectData", _descriptor4, this);
      _initializerDefineProperty(this, "username", _descriptor5, this);
      _initializerDefineProperty(this, "specialty", _descriptor6, this);
      _initializerDefineProperty(this, "role", _descriptor7, this);
      _initializerDefineProperty(this, "isLead", _descriptor8, this);
      _initializerDefineProperty(this, "projects", _descriptor9, this);
      _initializerDefineProperty(this, "testProjects", _descriptor10, this);
      if (this.authManager.usergroup == 'Leader') {
        this.isLead = true;
      }
    }

    // For testing only

    // Handler for anonymous requests
    redirectToLogin() {
      this.router.transitionTo('login');
    }

    // Get project list for current users
    // @action
    // getProjects() {
    //   console.log('In Project');
    //
    //   //get current user ID
    //   var this_username = this.authManager.username;
    //   console.log('username: ' + this_username);
    //
    //   // Get user Id
    //   this.store.query('project', {
    //     filter: {
    //       search: this_username,
    //     }
    //   }).then(function(cu) {
    //       console.log(cu)
    //   });
    //
    //   // KINDA WORKS
    //   // this.store.queryRecord('user', {}).then(function (user) {
    //   //   //let username = user.get('id');
    //   //   console.log('User ID:');
    //   // });
    //
    //   //WORKS
    //   // User current username to query for ID
    //   //let cur_user = this.store.findRecord('user', 4)
    //   //  .then(function(user) {
    //   //    console.log(user.type)
    //   //  });
    // }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "authManager", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "projectData", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "username", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Syntax';
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "specialty", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Cybersecurity';
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "role", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Knight';
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "isLead", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "projects", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "testProjects", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        id: 1,
        name: 'CryptoThing'
      }, {
        id: 2,
        name: 'BitStream'
      }, {
        id: 3,
        name: 'NebulousThing'
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "redirectToLogin", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToLogin"), _class.prototype)), _class);
  _exports.default = ProjectListingComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ProjectListingComponent);
});
;define("crypto-conductor-front/components/project-management-display", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/debug", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _tracking, _debug, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/debug",0,"@ember/object",0,"@ember/service",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  
  {{!Screen class that sets window scaling}}
  <div class="screen">
  
    {{#if this.authManager.isLoggedIn}}
  
      {{!Define content area in center of screen}}
      <div class="content-area">
  
        {{!Define account background box}}
        <div class="account-background"></div>
  
        {{!Define content area header}}
        <div class="content-header">
            <div class="content-title">
              Project Management Console
            </div>
        </div>
  
        {{!Display account information}}
        <div class="project-info">
  
          {{!Setup inner div for arrangement of account information}}
          <div class="account-info-text">
            <table id="project-management-table">
              <tr>
                <td width="200px">Project Title:</td>
                <td>
                  <div class="field">
                    <Input
                      aria-label="ProjectTitle"
                      id = "pt"
                      @type="type"
                      size = "23"
                      @value={{this.projectTitle}}
                      {{on "input" this.validateNames}}
                    />
                  </div>
                </td>
                <td>Specialties:</td>
                  <select class="account-drops">
                      {{#each this.testSpecialties as |spec|}}
                        <option>{{spec.name}}</option>
                      {{/each}}
                  </select>
                <td></td>
              </tr>
              <tr>
                <td width="100px" rowspan="8" style="vertical-align: top;">Description:</td>
                <td width="100px" rowspan="8" style="vertical-align: top;">
                  <div class="field">
                    <Textarea
                      aria-label="description"
                      id = "d"
                      @value={{this.description}}
                      rows="15"
                      cols="23"
                      {{on "input" this.validateNames}}
                    />
                  </div>
                </td>
                <td>Niches:</td>
                  <select class="account-drops">
                      {{#each this.testNiches as |niche|}}
                        <option>{{niche.name}}</option>
                      {{/each}}
                  </select>
                <td></td>
              </tr>
              <tr>
                <td>Clients:</td>
                <td>
                  <select class="account-drops">
                      {{#each this.testClientList as |client|}}
                        <option>{{client.name}}</option>
                      {{/each}}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Denials:</td>
                <td>
                  <select class="account-drops">
                      {{#each this.testDenialList as |deny|}}
                        <option>{{deny.name}}</option>
                      {{/each}}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Availability:</td>
                <td>
                  <select class="account-drops" id="ava">
                      {{#each this.public as |pub|}}
                        <option>{{pub.status}}</option>
                      {{/each}}
                  </select>
                </td>
              </tr>
              <tr><td>Status:</td>
                <td>
                  <select class="account-drops" id="sta">
                      {{#each this.status as |status|}}
                        <option>{{status.status}}</option>
                      {{/each}}
                  </select>
                </td>
              </tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
            </table>
  
            <div class="mod-button">
              <Input
                aria-label="update"
                @type="button"
                @value={{this.update}}
                {{on "click" this.sendData}}
              />
            </div>
          </div>
        </div>
      </div>
    {{else}}
      {{this.redirectToLogin}}
    {{/if}}
  </div>
  
  */
  {
    "id": "7aEESWup",
    "block": "[[[10,\"link\"],[14,\"rel\",\"stylesheet\"],[14,6,\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\"],[12],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"screen\"],[12],[1,\"\\n\\n\"],[41,[30,0,[\"authManager\",\"isLoggedIn\"]],[[[1,\"\\n\"],[1,\"    \"],[10,0],[14,0,\"content-area\"],[12],[1,\"\\n\\n\"],[1,\"      \"],[10,0],[14,0,\"account-background\"],[12],[13],[1,\"\\n\\n\"],[1,\"      \"],[10,0],[14,0,\"content-header\"],[12],[1,\"\\n          \"],[10,0],[14,0,\"content-title\"],[12],[1,\"\\n            Project Management Console\\n          \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[1,\"      \"],[10,0],[14,0,\"project-info\"],[12],[1,\"\\n\\n\"],[1,\"        \"],[10,0],[14,0,\"account-info-text\"],[12],[1,\"\\n          \"],[10,\"table\"],[14,1,\"project-management-table\"],[12],[1,\"\\n            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[14,\"width\",\"200px\"],[12],[1,\"Project Title:\"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n                  \"],[8,[39,1],[[24,\"aria-label\",\"ProjectTitle\"],[24,1,\"pt\"],[24,\"size\",\"23\"],[4,[38,2],[\"input\",[30,0,[\"validateNames\"]]],null]],[[\"@type\",\"@value\"],[\"type\",[30,0,[\"projectTitle\"]]]],null],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"Specialties:\"],[13],[1,\"\\n                \"],[10,\"select\"],[14,0,\"account-drops\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"testSpecialties\"]]],null]],null],null,[[[1,\"                      \"],[10,\"option\"],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n\"]],[1]],null],[1,\"                \"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[14,\"width\",\"100px\"],[14,\"rowspan\",\"8\"],[14,5,\"vertical-align: top;\"],[12],[1,\"Description:\"],[13],[1,\"\\n              \"],[10,\"td\"],[14,\"width\",\"100px\"],[14,\"rowspan\",\"8\"],[14,5,\"vertical-align: top;\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n                  \"],[8,[39,5],[[24,\"aria-label\",\"description\"],[24,1,\"d\"],[24,\"rows\",\"15\"],[24,\"cols\",\"23\"],[4,[38,2],[\"input\",[30,0,[\"validateNames\"]]],null]],[[\"@value\"],[[30,0,[\"description\"]]]],null],[1,\"                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"Niches:\"],[13],[1,\"\\n                \"],[10,\"select\"],[14,0,\"account-drops\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"testNiches\"]]],null]],null],null,[[[1,\"                      \"],[10,\"option\"],[12],[1,[30,2,[\"name\"]]],[13],[1,\"\\n\"]],[2]],null],[1,\"                \"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"Clients:\"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,\"select\"],[14,0,\"account-drops\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"testClientList\"]]],null]],null],null,[[[1,\"                      \"],[10,\"option\"],[12],[1,[30,3,[\"name\"]]],[13],[1,\"\\n\"]],[3]],null],[1,\"                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"Denials:\"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,\"select\"],[14,0,\"account-drops\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"testDenialList\"]]],null]],null],null,[[[1,\"                      \"],[10,\"option\"],[12],[1,[30,4,[\"name\"]]],[13],[1,\"\\n\"]],[4]],null],[1,\"                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"tr\"],[12],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"Availability:\"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,\"select\"],[14,0,\"account-drops\"],[14,1,\"ava\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"public\"]]],null]],null],null,[[[1,\"                      \"],[10,\"option\"],[12],[1,[30,5,[\"status\"]]],[13],[1,\"\\n\"]],[5]],null],[1,\"                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"tr\"],[12],[10,\"td\"],[12],[1,\"Status:\"],[13],[1,\"\\n              \"],[10,\"td\"],[12],[1,\"\\n                \"],[10,\"select\"],[14,0,\"account-drops\"],[14,1,\"sta\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"status\"]]],null]],null],null,[[[1,\"                      \"],[10,\"option\"],[12],[1,[30,6,[\"status\"]]],[13],[1,\"\\n\"]],[6]],null],[1,\"                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"tr\"],[12],[10,\"td\"],[12],[1,\" \"],[13],[13],[1,\"\\n            \"],[10,\"tr\"],[12],[10,\"td\"],[12],[1,\" \"],[13],[13],[1,\"\\n            \"],[10,\"tr\"],[12],[10,\"td\"],[12],[1,\" \"],[13],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"mod-button\"],[12],[1,\"\\n            \"],[8,[39,1],[[24,\"aria-label\",\"update\"],[4,[38,2],[\"click\",[30,0,[\"sendData\"]]],null]],[[\"@type\",\"@value\"],[\"button\",[30,0,[\"update\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[1,[30,0,[\"redirectToLogin\"]]],[1,\"\\n\"]],[]]],[13],[1,\"\\n\"]],[\"spec\",\"niche\",\"client\",\"deny\",\"pub\",\"status\"],false,[\"if\",\"input\",\"on\",\"each\",\"-track-array\",\"textarea\"]]",
    "moduleName": "crypto-conductor-front/components/project-management-display.hbs",
    "isStrictMode": false
  });
  let ProjectManagementDisplayComponent = (_class = class ProjectManagementDisplayComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "authManager", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
      _initializerDefineProperty(this, "projectData", _descriptor3, this);
      _initializerDefineProperty(this, "projectTitle", _descriptor4, this);
      _initializerDefineProperty(this, "description", _descriptor5, this);
      _initializerDefineProperty(this, "update", _descriptor6, this);
      _initializerDefineProperty(this, "delete", _descriptor7, this);
      _initializerDefineProperty(this, "testSpecialties", _descriptor8, this);
      _initializerDefineProperty(this, "testNiches", _descriptor9, this);
      _initializerDefineProperty(this, "testClientList", _descriptor10, this);
      _initializerDefineProperty(this, "testDenialList", _descriptor11, this);
      _initializerDefineProperty(this, "public", _descriptor12, this);
      _initializerDefineProperty(this, "status", _descriptor13, this);
    }
    // Basic print fucntion
    print() {
      console.log(this.userLast);
    }

    // JS Validation, Sanitization, Escaping
    validateNames() {
      uf.value = uf.value.replace(/[&*<>/';{}]/g, '');
      ul.value = ul.value.replace(/[&*<>/';{}]/g, '');
      um.value = um.value.replace(/[&*<>/';{}]/g, '');
      un.value = un.value.replace(/[&*<>/';{}]/g, '');
      ub.value = ub.value.replace(/[&*<>/';{}]/g, '');
    }

    // Update or create data
    sendData() {
      var projectData = {
        title: this.projectTitle,
        description: this.description,
        specialties: this.testSpecialties,
        niches: this.testNiches,
        clients: this.testClientList,
        denials: this.testDenialList,
        availability: ava.value,
        status: sta.value
      };
      console.log(projectData);
    }

    // Redirect for anonlymous users
    redirectToLogin() {
      this.router.transitionTo('login');
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "authManager", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "projectData", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "projectTitle", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'CryptoThing';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "description", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Add description';
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "update", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Update';
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "delete", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Delete';
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "testSpecialties", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        name: 'Technology'
      }, {
        name: 'Legal'
      }, {
        name: 'Business'
      }];
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "testNiches", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        name: 'Cybersecurity',
        parent: 'Technology'
      }, {
        name: 'Risk',
        parent: 'Legal'
      }, {
        name: 'Marketing',
        parent: 'Business'
      }];
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "testClientList", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        name: 'Bob'
      }, {
        name: 'Bill'
      }, {
        name: 'Jim'
      }, {
        name: 'Phil'
      }, {
        name: 'Sharon'
      }, {
        name: 'Jill'
      }];
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "testDenialList", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        name: 'BadGuy1'
      }, {
        name: 'BadGuy2'
      }, {
        name: 'BadGuy3'
      }, {
        name: 'BadGuy4'
      }, {
        name: 'BadGuy5'
      }, {
        name: 'BadGuy6'
      }];
    }
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "public", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        status: 'Public'
      }, {
        status: 'Private'
      }];
    }
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "status", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [{
        status: 'Open'
      }, {
        status: 'In progress'
      }, {
        status: 'Closed'
      }, {
        status: 'Final review'
      }];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "print", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "print"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "validateNames", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "validateNames"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sendData", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "sendData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "redirectToLogin", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "redirectToLogin"), _class.prototype)), _class);
  _exports.default = ProjectManagementDisplayComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ProjectManagementDisplayComponent);
});
;define("crypto-conductor-front/components/user-data", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{yield}}
  */
  {
    "id": "yT2V7S8A",
    "block": "[[[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "crypto-conductor-front/components/user-data.hbs",
    "isStrictMode": false
  });
  class UserDataComponent extends _component2.default {}
  _exports.default = UserDataComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, UserDataComponent);
});
;define("crypto-conductor-front/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page.js"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page.js"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/controllers/application", ["exports", "@ember/controller", "@ember/service"], function (_exports, _controller, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ApplicationController = (_class = class ApplicationController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "authManager", _descriptor, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "authManager", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ApplicationController;
});
;define("crypto-conductor-front/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/helpers/app-version", ["exports", "@ember/component/helper", "crypto-conductor-front/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"crypto-conductor-front/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("crypto-conductor-front/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("crypto-conductor-front/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("crypto-conductor-front/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("crypto-conductor-front/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "crypto-conductor-front/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"crypto-conductor-front/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("crypto-conductor-front/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("crypto-conductor-front/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("crypto-conductor-front/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("crypto-conductor-front/models/niche", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model",0,"@ember-data/model",0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let NicheModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.belongsTo)('specialty', {
    async: true
  }), (_class = class NicheModel extends _model.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "name", _descriptor, this);
      _initializerDefineProperty(this, "description", _descriptor2, this);
      _initializerDefineProperty(this, "specialty", _descriptor3, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "specialty", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = NicheModel;
});
;define("crypto-conductor-front/models/profile", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model",0,"@ember-data/model",0,"@ember-data/model",0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ProfileModel = (_dec = (0, _model.belongsTo)('user', {
    async: true,
    inverse: null
  }), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('number'), _dec4 = (0, _model.hasMany)('specialty', {
    async: true,
    inverse: null
  }), _dec5 = (0, _model.hasMany)('niche', {
    async: true,
    inverse: null
  }), (_class = class ProfileModel extends _model.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "users", _descriptor, this);
      _initializerDefineProperty(this, "mi", _descriptor2, this);
      _initializerDefineProperty(this, "balance", _descriptor3, this);
      _initializerDefineProperty(this, "deniedUsers", _descriptor4, this);
      _initializerDefineProperty(this, "niches", _descriptor5, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "users", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "mi", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "balance", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "deniedUsers", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "niches", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ProfileModel;
});
;define("crypto-conductor-front/models/project-entry", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model",0,"@ember-data/model",0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ProjectEntryModel = (_dec = (0, _model.belongsTo)('user', {
    async: true
  }), _dec2 = (0, _model.belongsTo)('niche', {
    async: true
  }), _dec3 = (0, _model.belongsTo)('project', {
    async: true
  }), _dec4 = (0, _model.attr)('number'), _dec5 = (0, _model.attr)('string'), _dec6 = (0, _model.attr)('date'), _dec7 = (0, _model.attr)('string'), _dec8 = (0, _model.attr)('date'), _dec9 = (0, _model.attr)('string'), (_class = class ProjectEntryModel extends _model.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "user", _descriptor, this);
      _initializerDefineProperty(this, "niche", _descriptor2, this);
      _initializerDefineProperty(this, "project", _descriptor3, this);
      _initializerDefineProperty(this, "current_score", _descriptor4, this);
      _initializerDefineProperty(this, "text_notes", _descriptor5, this);
      _initializerDefineProperty(this, "entry_date", _descriptor6, this);
      _initializerDefineProperty(this, "entry_time", _descriptor7, this);
      _initializerDefineProperty(this, "last_modified_date", _descriptor8, this);
      _initializerDefineProperty(this, "last_modified_time", _descriptor9, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "user", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "niche", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "project", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "current_score", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "text_notes", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "entry_date", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "entry_time", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "last_modified_date", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "last_modified_time", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ProjectEntryModel;
});
;define("crypto-conductor-front/models/project", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model",0,"@ember-data/model",0,"@ember-data/model",0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ProjectModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.hasMany)('user', {
    async: true,
    inverse: null
  }), _dec3 = (0, _model.hasMany)('niche', {
    async: true,
    inverse: null
  }), _dec4 = (0, _model.hasMany)('specialty', {
    async: true,
    inverse: null
  }), _dec5 = (0, _model.attr)('string'), _dec6 = (0, _model.attr)('string'), _dec7 = (0, _model.attr)('boolean'), (_class = class ProjectModel extends _model.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "name", _descriptor, this);
      _initializerDefineProperty(this, "users", _descriptor2, this);
      _initializerDefineProperty(this, "niches", _descriptor3, this);
      _initializerDefineProperty(this, "deniedUsers", _descriptor4, this);
      _initializerDefineProperty(this, "description", _descriptor5, this);
      _initializerDefineProperty(this, "status", _descriptor6, this);
      _initializerDefineProperty(this, "public", _descriptor7, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "users", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "niches", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "deniedUsers", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "status", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "public", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ProjectModel;
});
;define("crypto-conductor-front/models/specialty", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let SpecialtyModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), (_class = class SpecialtyModel extends _model.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "name", _descriptor, this);
      _initializerDefineProperty(this, "description", _descriptor2, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = SpecialtyModel;
});
;define("crypto-conductor-front/models/user", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/model",0,"@ember-data/model",0,"@ember-data/model"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let UserModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('string'), _dec5 = (0, _model.attr)('boolean'), _dec6 = (0, _model.attr)('date'), _dec7 = (0, _model.attr)('date'), (_class = class UserModel extends _model.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "username", _descriptor, this);
      _initializerDefineProperty(this, "first_name", _descriptor2, this);
      _initializerDefineProperty(this, "last_name", _descriptor3, this);
      _initializerDefineProperty(this, "email", _descriptor4, this);
      _initializerDefineProperty(this, "is_active", _descriptor5, this);
      _initializerDefineProperty(this, "last_login", _descriptor6, this);
      _initializerDefineProperty(this, "date_joined", _descriptor7, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "username", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "first_name", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "last_name", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "email", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "is_active", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "last_login", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "date_joined", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = UserModel;
});
;define("crypto-conductor-front/router", ["exports", "@ember/routing/router", "crypto-conductor-front/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"crypto-conductor-front/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.baseURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('login');
    this.route('projectDashboard');
    this.route('accountManagement');
    this.route('projectManagement');
    this.route('projectDetail');
    this.route('scoringDashboard');
    this.route('contactPage');
  });
});
;define("crypto-conductor-front/routes/account-management", ["exports", "@ember/routing/route", "@ember/service", "rsvp", "@ember/object"], function (_exports, _route, _service, _rsvp, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service",0,"rsvp",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let AccountManagementRoute = (_class = class AccountManagementRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "authManager", _descriptor2, this);
      _initializerDefineProperty(this, "router", _descriptor3, this);
    }
    beforeModel() {
      console.log(this.authManager.isLoggedIn);
      if (!this.authManager.isLoggedIn) {
        this.router.transitionTo('login'); // Implicitly aborts the on-going transition.
      }
    }

    // Collects user and profile data for each user
    model() {
      return _rsvp.default.hash({
        user: this.store.findAll('user'),
        profile: this.store.findAll('profile')
      });
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "authManager", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = AccountManagementRoute;
});
;define("crypto-conductor-front/routes/contact-page", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class ContactPageRoute extends _route.default {}
  _exports.default = ContactPageRoute;
});
;define("crypto-conductor-front/routes/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class IndexRoute extends _route.default {}
  _exports.default = IndexRoute;
});
;define("crypto-conductor-front/routes/login", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class LoginRoute extends _route.default {}
  _exports.default = LoginRoute;
});
;define("crypto-conductor-front/routes/project-dashboard", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ProjectDashboardRoute = (_class = class ProjectDashboardRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
      _initializerDefineProperty(this, "authManager", _descriptor3, this);
    }
    beforeModel() {
      console.log(this.authManager.isLoggedIn);
      if (!this.authManager.isLoggedIn) {
        this.router.transitionTo('login'); // Implicitly aborts the on-going transition.
      }
    }

    // Collects project per user
    model() {
      let projects = this.store.findAll('project');
      return projects;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "authManager", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ProjectDashboardRoute;
});
;define("crypto-conductor-front/routes/project-detail", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class ProjectDetailRoute extends _route.default {}
  _exports.default = ProjectDetailRoute;
});
;define("crypto-conductor-front/routes/project-management", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ProjectManagementRoute = (_class = class ProjectManagementRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "router", _descriptor2, this);
      _initializerDefineProperty(this, "authManager", _descriptor3, this);
    }
    beforeModel() {
      console.log(this.authManager.isLoggedIn);
      if (!this.authManager.isLoggedIn) {
        this.router.transitionTo('login'); // Implicitly aborts the on-going transition.
      }
    }

    // Collects projects per user
    model() {
      let projects = this.store.findAll('project');
      return projects;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "authManager", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ProjectManagementRoute;
});
;define("crypto-conductor-front/routes/scoring-dashboard", ["exports", "@ember/routing/route", "@ember/service", "@ember/object"], function (_exports, _route, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ScoringDashboardRoute = (_class = class ScoringDashboardRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "router", _descriptor, this);
      _initializerDefineProperty(this, "authManager", _descriptor2, this);
    }
    // Redirect to login if unauthenticated
    beforeModel() {
      console.log(this.authManager.isLoggedIn);
      if (!this.authManager.isLoggedIn) {
        this.router.transitionTo('login'); // Implicitly aborts the on-going transition.
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "authManager", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ScoringDashboardRoute;
});
;define("crypto-conductor-front/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/services/auth-manager", ["exports", "@ember/service", "@glimmer/tracking", "@ember/object", "jquery", "ember-cli-js-cookie"], function (_exports, _service, _tracking, _object, _jquery, _emberCliJsCookie) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object",0,"jquery",0,"ember-cli-js-cookie",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let AuthManagerService = (_class = class AuthManagerService extends _service.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "username", _descriptor, this);
      _initializerDefineProperty(this, "usergroup", _descriptor2, this);
      _initializerDefineProperty(this, "userid", _descriptor3, this);
      _initializerDefineProperty(this, "router", _descriptor4, this);
      _initializerDefineProperty(this, "isLoggedIn", _descriptor5, this);
    }
    // Get current session cookie
    init() {
      super.init(...arguments);
      let authService = this;
      let data = _jquery.default.get('/session/', function (response) {
        authService.username = response.data.username;
        authService.usergroup = response.data.usergroup;
        authService.userid = response.data.userid;
        authService.isLoggedIn = response.data.isLoggedIn;
      });
    }

    // Post creds to the server
    login(loginData) {
      const csrftoken = _emberCliJsCookie.default.get('csrftoken');
      let authService = this;
      _jquery.default.post('/session/', loginData, function (response) {
        console.log(response);
        authService.username = response.data.username;
        authService.usergroup = response.data.usergroup;
        authService.userid = response.data.userid;
        authService.isLoggedIn = response.data.isLoggedIn;
      });
    }

    // Delete session token and logout
    logout(logoutData) {
      var csrftoken = _emberCliJsCookie.default.get('csrftoken');
      let authService = this;
      _jquery.default.ajax({
        url: '/session/',
        type: 'DELETE',
        headers: {
          'X-CSRFToken': csrftoken
        },
        success: function (response) {
          authService.username = null;
          authService.usergroup = null;
          authService.userid = null;
          authService.isLoggedIn = false;
        }
      });
      this.router.transitionTo('login');
    }

    //Helper print function
    print() {}
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "username", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "usergroup", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "userid", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "router", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "isLoggedIn", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  })), _class);
  _exports.default = AuthManagerService;
});
;define("crypto-conductor-front/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/services/project-data", ["exports", "@ember/service", "@glimmer/tracking", "@ember/object"], function (_exports, _service, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ProjectDataService = (_class = class ProjectDataService extends _service.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "id", _descriptor, this);
      _initializerDefineProperty(this, "name", _descriptor2, this);
      _initializerDefineProperty(this, "description", _descriptor3, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "id", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "name", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "description", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ProjectDataService;
});
;define("crypto-conductor-front/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/templates/account-management", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <!-- Provides account Management functions -->
  
  {{page-title "Account Management"}}
  
  <AccountInformation @user_data={{@model}}/>
  
  {{outlet}}
  
  */
  {
    "id": "c95vbI7E",
    "block": "[[[3,\" Provides account Management functions \"],[1,\"\\n\\n\"],[1,[28,[35,0],[\"Account Management\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@user_data\"],[[30,1]]],null],[1,\"\\n\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"]],[\"@model\"],false,[\"page-title\",\"account-information\",\"component\",\"-outlet\"]]",
    "moduleName": "crypto-conductor-front/templates/account-management.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("crypto-conductor-front/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "CryptoConductorFront"}}
  
  <HeaderDisplay/>
  
  {{!-- Root of the application --}}
  
  {{outlet}}
  
  <FooterDisplay/>
  
  */
  {
    "id": "Fb46EDkA",
    "block": "[[[1,[28,[35,0],[\"CryptoConductorFront\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,null,null],[1,\"\\n\\n\"],[1,\"\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\\n\"],[8,[39,4],null,null,null],[1,\"\\n\"]],[],false,[\"page-title\",\"header-display\",\"component\",\"-outlet\",\"footer-display\"]]",
    "moduleName": "crypto-conductor-front/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("crypto-conductor-front/templates/contact-page", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <!-- Provides anonymous users the ability to contact leaders -->
  
  {{page-title "ContactPage"}}
  
  <ContactWindow/>
  
  {{outlet}}
  
  */
  {
    "id": "GS+9ZGf8",
    "block": "[[[3,\" Provides anonymous users the ability to contact leaders \"],[1,\"\\n\\n\"],[1,[28,[35,0],[\"ContactPage\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,null,null],[1,\"\\n\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"page-title\",\"contact-window\",\"component\",\"-outlet\"]]",
    "moduleName": "crypto-conductor-front/templates/contact-page.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("crypto-conductor-front/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <!-- Prompts login at first visit -->
  
  {{page-title "CryptoConductor Page"}}
  
  <LoginUi/>
  
  {{outlet}}
  
  */
  {
    "id": "D6NMDf9O",
    "block": "[[[3,\" Prompts login at first visit \"],[1,\"\\n\\n\"],[1,[28,[35,0],[\"CryptoConductor Page\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,null,null],[1,\"\\n\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"page-title\",\"login-ui\",\"component\",\"-outlet\"]]",
    "moduleName": "crypto-conductor-front/templates/index.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("crypto-conductor-front/templates/login", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <!-- Facilitates login functionality -->
  
  {{page-title "Login Portal"}}
  
  <LoginUi/>
  
  {{outlet}}
  
  */
  {
    "id": "d/mCUhWh",
    "block": "[[[3,\" Facilitates login functionality \"],[1,\"\\n\\n\"],[1,[28,[35,0],[\"Login Portal\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,null,null],[1,\"\\n\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"page-title\",\"login-ui\",\"component\",\"-outlet\"]]",
    "moduleName": "crypto-conductor-front/templates/login.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("crypto-conductor-front/templates/project-dashboard", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <!-- Provides a list of projects for the current user -->
  
  {{page-title "Project Dashboard"}}
  
  <ProjectListing @user_projects={{@model}}/>
  
  {{outlet}}
  
  */
  {
    "id": "hFNmWU3R",
    "block": "[[[3,\" Provides a list of projects for the current user \"],[1,\"\\n\\n\"],[1,[28,[35,0],[\"Project Dashboard\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@user_projects\"],[[30,1]]],null],[1,\"\\n\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"]],[\"@model\"],false,[\"page-title\",\"project-listing\",\"component\",\"-outlet\"]]",
    "moduleName": "crypto-conductor-front/templates/project-dashboard.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("crypto-conductor-front/templates/project-detail", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <!-- Provides a list of project entries -->
  <!-- Currently not implemented -->
  
  {{page-title "Project Detail"}}
  
  Project Detail Page
  
  {{outlet}}
  
  */
  {
    "id": "5bUn3bwt",
    "block": "[[[3,\" Provides a list of project entries \"],[1,\"\\n\"],[3,\" Currently not implemented \"],[1,\"\\n\\n\"],[1,[28,[35,0],[\"Project Detail\"],null]],[1,\"\\n\\nProject Detail Page\\n\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "crypto-conductor-front/templates/project-detail.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("crypto-conductor-front/templates/project-management", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <!-- Provides project specific details and allows leaders to edit them -->
  
  {{page-title "Project Management"}}
  
  <ProjectManagementDisplay @project={{@model}}/>
  
  {{outlet}}
  
  */
  {
    "id": "QS9WeS4q",
    "block": "[[[3,\" Provides project specific details and allows leaders to edit them \"],[1,\"\\n\\n\"],[1,[28,[35,0],[\"Project Management\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@project\"],[[30,1]]],null],[1,\"\\n\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"]],[\"@model\"],false,[\"page-title\",\"project-management-display\",\"component\",\"-outlet\"]]",
    "moduleName": "crypto-conductor-front/templates/project-management.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("crypto-conductor-front/templates/scoring-dashboard", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <!-- Faciliates project scoring -->
  <!-- Not implemented yet -->
  
  {{page-title "Scoring Dashboard"}}
  
    {{#if this.authManager.isLoggedIn}}
  
      Scoring Dashboard Page
  
    {{else}}
  
      {{this.redirectToLogin}}
  
    {{/if}}
  
  {{outlet}}
  
  */
  {
    "id": "ARf/zcHh",
    "block": "[[[3,\" Faciliates project scoring \"],[1,\"\\n\"],[3,\" Not implemented yet \"],[1,\"\\n\\n\"],[1,[28,[35,0],[\"Scoring Dashboard\"],null]],[1,\"\\n\\n\"],[41,[30,0,[\"authManager\",\"isLoggedIn\"]],[[[1,\"\\n    Scoring Dashboard Page\\n\\n\"]],[]],[[[1,\"\\n    \"],[1,[30,0,[\"redirectToLogin\"]]],[1,\"\\n\\n\"]],[]]],[1,\"\\n\"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"page-title\",\"if\",\"component\",\"-outlet\"]]",
    "moduleName": "crypto-conductor-front/templates/scoring-dashboard.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("crypto-conductor-front/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("crypto-conductor-front/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('crypto-conductor-front/config/environment', [], function() {
  var prefix = 'crypto-conductor-front';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("crypto-conductor-front/app")["default"].create({"name":"crypto-conductor-front","version":"beta+e34fc443"});
          }
        
//# sourceMappingURL=crypto-conductor-front.map
