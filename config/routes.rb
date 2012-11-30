Pinpoint::Application.routes.draw do
  devise_for :users, :controllers => { :sessions => "sessions" }
  devise_scope :user do
    get "sessions", :to => "sessions#show"
  end
end

