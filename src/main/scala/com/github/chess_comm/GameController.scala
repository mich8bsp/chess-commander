package com.github.chess_comm

import com.twitter.finatra.http.Controller

class GameController extends Controller{

  post("/make-move/") { request: Move =>
    println(s"got move request $request")
  }
}

case class Move(

               )
