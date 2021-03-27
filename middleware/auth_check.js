module.exports = {
    isAuthenticatedUser: (redirectUrls) => {
        return (req, res, next) => {
            if (req.isAuthenticated()) {
                if (redirectUrls.successRedirect) {
                    return res.redirect(redirectUrls.successRedirect);
                } else {
                    return next();
                }
            } else {
                if (redirectUrls.failureMessage) {
                    req.flash('error', redirectUrls.failureMessage);
                }
                if (redirectUrls.failureRedirect) {
                    return res.redirect(redirectUrls.failureRedirect);
                } else {
                    return res.redirect("/");
                }
            }

        }
    }
}