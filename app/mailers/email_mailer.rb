class EmailMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.email_mailer.email.subject
  #
  def email
    @greeting = "Hi"

    mail to: "to@example.org"
  end
end
