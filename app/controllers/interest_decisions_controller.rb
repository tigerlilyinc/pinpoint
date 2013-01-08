class InterestDecisionsController < ApplicationController
  def index
    render :json => current_user.decided_interest_decisions
  end

  def interested
    interest_decision = InterestDecision.find(params[:id])
    interest_decision.interested!

    render :nothing => true, :status => 204
  end

  def uninterested
    interest_decision = InterestDecision.find(params[:id])
    interest_decision.uninterested!

    render :nothing => true, :status => 204
  end
end

