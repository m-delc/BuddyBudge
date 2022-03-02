Rails.application.routes.draw do
  
  # namespace :api do
  
  resources :users, only: [:update, :destroy]
  resources :people, only: [:index, :update]
  resources :friends, only: [:create]
    
  post '/users', to: "users#create"
  post '/login', to: "sessions#login"
  get '/authorize_user', to: "users#show"
  delete '/logout', to: "sessions#logout"
  # post '/friends', to: "friends#create"


    
  # end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end