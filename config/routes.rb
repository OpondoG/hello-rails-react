Rails.application.routes.draw do
  get 'static/index'
  namespace :api do
    get "greetings"
  end
end
