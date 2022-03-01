Rails.application.routes.draw do
  
  # namespace :api do
  
  resources :users, only: [:update, :destroy]
  resources :people, only: [:index]
    
  post '/users', to: "users#create"
  post '/login', to: "sessions#login"
  get '/authorize_user', to: "users#show"
  delete '/logout', to: "sessions#logout"

  get '/people', to: "people#index"

    
  # end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end