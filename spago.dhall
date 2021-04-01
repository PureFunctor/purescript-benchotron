{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name = "benchotron"
, dependencies =
  [ "arrays"
  , "console"
  , "datetime"
  , "effect"
  , "exceptions"
  , "exists"
  , "foldable-traversable"
  , "identity"
  , "lcg"
  , "node-fs"
  , "node-readline"
  , "now"
  , "numbers"
  , "profunctor"
  , "psci-support"
  , "quickcheck"
  , "strings"
  , "transformers"
  ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs" ]
}
