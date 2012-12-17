class RegistrationsController < Devise::RegistrationsController

  def update
    @current_user.update_attribute(:name, params[:name])
    @current_user.update_attribute(:email, params[:email])
    @current_user.update_attribute(:contact_me, params[:contact_me])
    render :json => {:id => params[:id], :auth => true, user: current_user}
  end

end
