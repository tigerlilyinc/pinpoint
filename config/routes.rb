Pinpoint::Application.routes.draw do
  devise_for :users, :controllers => { :sessions => "sessions", :registrations => "registrations"}
  devise_scope :user do
    get "sessions", :to => "sessions#show"
    post "sessions", :to => "sessions#create"
    delete "sessions", :to => "sessions#destroy"
    put "users/:id", :to => "registrations#update"
    post "users", :to => "registrations#create"
  end

  resources :companies, :only => :none do
    member do
      post :uninterested
    end
  end

  resources :interest_decisions, :only => [:index] do
    member do
      post :interested
      post :uninterested
    end
  end

  resources :matches, :only => :index
  resources :tags, :only => :index
  resources :user_tags, :only => [:create, :destroy]

  root :to => "home#index"
end

