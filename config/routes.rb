Rails.application.routes.draw do
  root 'pages#home'
  resources :users
  resources :todos

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/login', to: 'sessions#destroy'
end
