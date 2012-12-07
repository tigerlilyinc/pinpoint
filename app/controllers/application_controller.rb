class ApplicationController < ActionController::Base
  protect_from_forgery
  respond_to :json
  before_filter :authenticate_user

  private

  def authenticate_user
    @current_user = User.find_by_authentication_token(request.headers["X-Auth-Token"])
    unless @current_user
      respond_with({:error => "Token is invalid."}, :status => :forbidden, :location => nil)
    end
  end
end

