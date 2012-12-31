class InterestDecisionsController < ApplicationController
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

