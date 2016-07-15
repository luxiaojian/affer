'use strict';

const SSO_HOST_MAP = {
  alpha: 'sso.alpha.elenet.me',
  beta: 'sso.beta.elenet.me',
  prod: 'sso.ele.me'
};

const host = location.host;

let env;
if (~host.indexOf('.alpha.elenet.me') || ~host.indexOf('.test.elenet.me')) {
  env = 'alpha';
} else if (~host.indexOf('.beta.elenet.me')) {
  env = 'beta';
} else if (~host.indexOf('.ele.me')) {
  env = 'prod';
}

export default SSO_HOST_MAP[env];
