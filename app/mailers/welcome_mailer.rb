class WelcomeMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.welcome_mailer.welcome.subject
  #
  def welcome
    @greeting = "Hi"

    mail to: User.first.email, subject: "Welcome to BuddyBudge!"
  end
end
