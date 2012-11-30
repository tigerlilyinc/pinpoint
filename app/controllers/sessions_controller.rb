class SessionsController < Devise::SessionsController
  skip_before_filter :verify_authenticity_token # TODO: Remove this

  def show
    if user_signed_in?
      render :json => {:id => session[:id], :auth => true, user: current_user}
    else
      render :json => {auth: false}
    end
  end

  def create
    resource = warden.authenticate!(:scope => resource_name, :recall => "sessions#failure")
    sign_in(resource_name, resource)
    render :json => {:id => session[:id], :auth => true, user: current_user}
  end

  def failure
    render :json => {auth: false}
  end

  def destroy
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    render :json => {auth: false}
  end
end

