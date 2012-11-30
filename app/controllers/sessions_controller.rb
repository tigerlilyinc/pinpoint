class SessionsController < Devise::SessionsController
  def show
    if user_signed_in?
      render :json => {:id => session[:id], :auth => true, user: current_user}
    else
      render :json => {auth: false}
    end
  end
end

