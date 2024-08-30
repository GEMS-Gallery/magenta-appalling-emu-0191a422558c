import Func "mo:base/Func";
import Nat "mo:base/Nat";

import Time "mo:base/Time";
import Array "mo:base/Array";
import List "mo:base/List";
import Text "mo:base/Text";
import Int "mo:base/Int";
import Debug "mo:base/Debug";

actor {
  // Define the Post type
  type Post = {
    id: Nat;
    title: Text;
    body: Text; // This will now contain HTML content
    author: Text;
    timestamp: Int;
  };

  // Stable variable to store posts
  stable var posts : List.List<Post> = List.nil();
  stable var nextId : Nat = 0;

  // Function to create a new post
  public func createPost(title: Text, body: Text, author: Text) : async Nat {
    let post : Post = {
      id = nextId;
      title = title;
      body = body; // This now contains HTML content
      author = author;
      timestamp = Time.now();
    };
    posts := List.push(post, posts);
    nextId += 1;
    Debug.print("New post created with ID: " # Int.toText(post.id));
    post.id
  };

  // Function to get all posts
  public query func getPosts() : async [Post] {
    let reversedPosts = List.reverse(posts);
    List.toArray(reversedPosts)
  };

  // Helper function to convert Int to Text
  func intToText(i: Int) : Text {
    Int.toText(i)
  };

  // System func to handle upgrades
  system func preupgrade() {
    Debug.print("Preparing to upgrade. Total posts: " # intToText(List.size(posts)));
  };

  system func postupgrade() {
    Debug.print("Upgrade complete. Total posts: " # intToText(List.size(posts)));
  };
}
