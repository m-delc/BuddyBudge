Rails.application.routes.draw do
  
  # namespace :api do
  
  resources :users, only: [:update, :create, :destroy, :index, :show]
  resources :people, only: [:index, :update, :show]
  resources :friends, only: [:create, :index, :destroy, :show]
  resources :budgets, only: [:create, :index]
  resources :person_budgets, only: [:index]
    
  post '/login', to: "sessions#login"
  get '/authorize_user', to: "users#show"
  delete '/logout', to: "sessions#logout"
  # post '/friends', to: "friends#create"
  get '/friends', to: "friends#index"


    
  # end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end