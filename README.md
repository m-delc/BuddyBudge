added to config/application.rb:

    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore

added:

    User resource, with "has_secure_password" in User model

added to application_controller:

    before_action
    current_user
    authorized_user

added fallback_controller:

    with index method

