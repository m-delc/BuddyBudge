class WelcomeMailer < ApplicationMailer

    def send_welcome_email(user)
      @user = user
      mail({
        to: user.email,
        from: 'eu@mauricioackermann.com.br',
        subject: 'Seja bem-vindo ao sistema Maurício Ackermann'
        })
    end
  
  end
  