import React from "react";
import { NotFoundStatus } from "../ProductListing";
import Skelleton from "../Skelleton";

const EmptyList = ({ status }: { status: NotFoundStatus }) => {
  if (status === NotFoundStatus.EMPTY) {
    return (
      <div className="empty-list-container">
        <h2>No products found</h2>
        <p>Please try again with different filters</p>
      </div>
    );
  }
  if (status === NotFoundStatus.LOADING) {
    return (
      <div className="empty-list-container">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skelleton key={index} />
        ))}
      </div>
    );
  }
  return (
    <div className="empty-list-container">
      <h2>No products found</h2>
      <p>Please try again with different filters</p>
    </div>
  );
};

export default EmptyList;
