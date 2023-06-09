export default function authWithRequiredPermission(requiredPermission) {
  return function (req, res, next) {
    if (!req.session.auth) {
      req.session.retUrl = req.originalUrl;
      return res.redirect('/account/signin');
    }
    if (req.session.authUser && req.session.authUser.permission !== requiredPermission) {
      return res.render('404', { layout: false });
    }

    next();
  }
}