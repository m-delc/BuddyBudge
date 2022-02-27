Rails.application.routes.draw do
  
  # namespace :api do

    resources :users, only: [:update, :destroy]
    
    post '/users', to: "users#create"
    post '/login', to: "sessions#login"
    get '/authorize_user', to: "users#show"
    delete '/logout', to: "sessions#logout"
    
  # end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end