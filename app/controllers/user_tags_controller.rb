class UserTagsController < ApplicationController
  # before_filter :authenticate_user! TODO

  def create
    user_tag = UserTag.create!(params[:user_tag])
    render :json => user_tag
  end


  def destroy
    user_id = params[:user_id]
    tag_id = params[:tag_id]
    user_tag = UserTag.where(:user_id => user_id, :tag_id => tag_id).first
    if user_tag.present?
      user_tag.destroy
    end

    render :nothing => true, :status => 204
  end
end

