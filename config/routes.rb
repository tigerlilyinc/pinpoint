Pinpoint::Application.routes.draw do
  devise_for :users, :controllers => { :sessions => "sessions" }
  devise_scope :user do
    get "sessions", :to => "sessions#show"
    post "sessions", :to => "sessions#create"
    delete "sessions", :to => "sessions#destroy"
  end

  resources :tags, :only => :index
  resources :user_tags, :only => [:create, :destroy]

  root :to => "home#index"
end

