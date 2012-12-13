class RegistrationsController < Devise::RegistrationsController

  def update
    @current_user.update_attribute(:name, params[:name])
    @current_user.update_attribute(:email, params[:email])
    render :json => {:id => params[:id], :auth => true, user: current_user}
  end

end
