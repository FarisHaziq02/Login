import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RecDet.css';

function RecDet() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate(); // Hook for navigation
  const [recipe, setRecipe] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch the recipe details by ID
    fetch(`http://localhost:5000/recipe/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Recipe Details: ", data);
        setRecipe(data);
      })
      .catch((error) => console.error('Error fetching recipe details:', error));
      
    // Fetch comments for this recipe (in progress)
    fetch(`http://localhost:5000/recipe/${id}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => console.error('Error fetching comments:', error));
  }, [id]);

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic (mocked for now)
    const newCommentData = {
      id: comments.length + 1,
      text: newComment,
      author: 'Anonymous',
    };
    setComments([...comments, newCommentData]);
    setNewComment('');
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container recipe-detail">
      <button className="btn btn-secondary back-button" onClick={handleBackClick}>
        &larr; Back
      </button>
      <h1 className="recipe-title">{recipe.recipe_name}</h1>
      <img
        src={`data:image/jpeg;base64,${recipe.image}`}
        className="img-fluid"
        alt={recipe.recipe_name}
      />
      <div className="recipe-description">
        <h3>Description</h3>
        <p>{recipe.description}</p>
      </div>
      <div className="recipe-ingredients">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.split(',').map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-steps">
        <h3>Cooking Steps</h3>
        <ol>
          {recipe.cooking_steps.split('.').map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      <div className="recipe-difficulty">
        <h3>Difficulty: {recipe.difficulty}</h3>
      </div>

      {/* Comment Section */}
      <div className="comments-section">
        <h3>Comments</h3>
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment">
              <p><strong>{comment.author}</strong>: {comment.text}</p>
            </li>
          ))}
        </ul>
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <div className="form-group">
            <textarea
              className="form-control"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add your comment"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Comment</button>
        </form>
      </div>
    </div>
  );
}

export default RecDet;
