import React from "react";
import { FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    author,
    title,
    thumbnail_url,
    details,
    total_view,
    rating,
  } = news;

  return (
    <div className="card bg-white shadow-xl rounded-lg border border-gray-200 mb-8 hover:scale-105 transition">
      <div className="card-body">
        {/* Author Info */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-semibold text-sm">{author.name}</h3>
              <p className="text-gray-500 text-xs">{author.published_date}</p>
            </div>
          </div>
          <FaShareAlt className="text-gray-400 cursor-pointer" />
        </div>

        {/* Title */}
        <h2 className="font-bold text-lg mt-3">{title}</h2>

        {/* Thumbnail */}
        <figure className="my-3">
          <img
            src={thumbnail_url}
            alt="News Thumbnail"
            className="w-full object-cover rounded-lg mb-4"
          />
        </figure>

        {/* Details */}
        <p className="text-gray-600 text-sm">
          {details.length > 100
            ? `${details.slice(0, 100)}...`
            : details}{" "}
          <span className="text-blue-500 font-medium cursor-pointer">
            Read More
          </span>
        </p>

        {/* Footer */}
        <div className="card-actions justify-between items-center mt-3">
          <div className="flex items-center text-yellow-500">
            <FaStar className="mr-1" />
            <span>{rating.number}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaRegEye className="mr-1" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
