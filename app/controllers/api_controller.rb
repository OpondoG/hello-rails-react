class ApiController < ApplicationController
  def greetings
    render json: Message.order("RANDOM()").first.content
  end
end
