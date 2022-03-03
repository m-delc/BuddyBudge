Rails.application.routes.draw do
  
  # namespace :api do
  
  resources :users, only: [:update, :create, :destroy, :index]
  resources :people, only: [:index, :update]
  resources :friends, only: [:create, :index]
    
  # post '/users', to: "users#create"
  post '/login', to: "sessions#login"
  get '/authorize_user', to: "users#show"
  delete '/logout', to: "sessions#logout"
  # post '/friends', to: "friends#create"
  get '/friends', to: "friends#index"


    
  # end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end